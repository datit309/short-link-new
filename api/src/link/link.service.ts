import {CACHE_MANAGER, Inject, Injectable} from '@nestjs/common';
import { CreateLinkDto } from './dto/create-link.dto';
import { UpdateLinkDto } from './dto/update-link.dto';
import {Cache} from "cache-manager";
import {InjectModel} from "@nestjs/mongoose";
import {UserEntity, UserEntityDocument} from "../user/entities/user.entity";
import {PaginateModel} from "mongoose";
import {LinkEntity, LinkEntityDocument} from "./entities/link.entity";
import moment from "moment";

@Injectable()
export class LinkService {

  constructor(
      @Inject(CACHE_MANAGER) private cacheManager: Cache,
      @InjectModel(UserEntity.name)
      private modelUser: PaginateModel<UserEntityDocument>,
      @InjectModel(UserEntity.name)
      private modelLink: PaginateModel<LinkEntityDocument>,
  ){

  }

  async generateLink(length: number){
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    let link = await this.modelLink.findOne({
      short_link: result
    })
    if(link) {
      result = await this.generateLink(length)
    }
    return result;
  }
  async createLink(body: CreateLinkDto) {
    try {
      let link = null
      let user = null
      body['domain'] = process.env.DOMAIN_URL

      if(body['user_id']){
        user = await this.modelUser.findOne({_id: body['user_id']})
        if(!user){
          body['user_id'] = null
        }
        body['user_id'] = user._id
      }

      if(!body['origin_link']){
        throw new Error(`The link you entered is not valid`)
      }
      let hostname = new URL(body['origin_link']).hostname;

      if(hostname.toLowerCase() === body['domain'].toLowerCase()){
        throw new Error(`The link you just entered is invalid or violates our policy.`)
      }

      if(body['short_link']){
        link = await this.modelLink.findOne({
          short_link: body['short_link']
        })
        if(link) {
          throw new Error(`Link ${body['short_link']} already exists`)
        }
      } else {
        body['short_link'] = await this.generateLink(5)
      }

      link = await this.modelLink.create({
        user_id: body['user_id'],
        domain: body['domain'],
        origin_link: body['origin_link'],
        short_link: body['short_link'],
        date_expires: body['date_expires'] || null,
        password: body['password'] || null,
        counter: 0
      })
      return link
    } catch (e) {
      return e
    }
  }

  findAll() {
    return `This action returns all link`;
  }

  async findOne(short_link: string, password: string) {
    try {
      let link = await this.modelLink.findOne({
        short_link,
        date_expires: {
          $gte: moment().unix()
        }
      }).select('domain short_link password')
      if(!link) {
        throw new Error(`Link does not exist`)
      }
      if(link['password'] && password != link['password']){
        throw new Error(`Password incorrect`)
      }
      link['counter'] += 1
      await link.save()
      delete link['password']

      return link
    } catch (e) {
      return e
    }

  }

  update(id: number, updateLinkDto: UpdateLinkDto) {
    return `This action updates a #${id} link`;
  }

  remove(id: number) {
    return `This action removes a #${id} link`;
  }
}
