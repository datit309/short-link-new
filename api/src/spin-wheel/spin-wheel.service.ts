import {Injectable} from '@nestjs/common';
import {UpdateSpinWheelDto} from './dto/update-spin-wheel.dto';
import {PaginateModel} from "mongoose";
import {SpinWheelEntity, SpinWheelEntityDocument} from "./entities/spin-wheel.entity";
import {InjectModel} from "@nestjs/mongoose";
import {SpinWheelHistoryEntity, SpinWheelHistoryEntityDocument} from "./entities/spin-history.entity";
import {UserEntity, UserEntityDocument} from "../user/entities/user.entity";
import { imgbbUploader } from "imgbb-uploader";

@Injectable()
export class SpinWheelService {
  constructor(
      @InjectModel(UserEntity.name)
      private modelUser: PaginateModel<UserEntityDocument>,
      @InjectModel(SpinWheelEntity.name)
      private modelSpinWheel: PaginateModel<SpinWheelEntityDocument>,
      @InjectModel(SpinWheelHistoryEntity.name)
      private modelSpinHistory: PaginateModel<SpinWheelHistoryEntityDocument>
  ) {
  }
  async getOneSpinWheel(body, req) {
    try {
      let spin =  await this.modelSpinWheel.findOne({
        _id: body._id
      })
      let data = spin.list_item_spin.map((item) => {
        return {
          id: item.id,
          description: item.description,
          image: item.image
        }
      })
      return data
    } catch (e) {
      throw Error(e)
    }
  }

  async getAllSpinWheel(body, req) {
    try {
      const user = req.user
      return await this.modelSpinWheel.find({
        user_id: user.user_id,
      })
    } catch (e) {
      throw Error(e)
    }
  }
  async create(body: any, req) {
    try {
      const user = req.user
      return await this.modelSpinWheel.create({
        user_id: user.user_id,
        username: user.username,
        turns: body.turns,
        turned: 0,
        status: 'ACTIVE',
        list_item_spin: []
      })
    } catch (e) {
      throw Error(e)
    }
  }
  async updateSpinWheel(body: any, req) {
    try {
      let spin = await this.modelSpinWheel.findOneAndUpdate({
        _id: body._id,
        // user_id: req.user.user_id,
      }, {
        turns: body.turns,
        // turned: body.turned,
        // status: body.status
      })
      for (let i = 0; i < body.list_item_spin.length; i++) {
        let item = body.list_item_spin[i]
        if(item.image) {
          const options = {
            apiKey: process.env.IMGBB_API_KEY,
            expiration: 86400 * 30, // 30 days
            base64string: item.image
          };
          let response = await imgbbUploader(options)
          if(response.success) {
            item.image = response.data.url
          }
        }
      }
      spin.list_item_spin = body.list_item_spin
      await spin.save()
      return spin
    } catch (e) {
      throw Error(e)
    }
  }

  async deleteSpinWheel(body: any, req) {
    try {
      return await this.modelSpinWheel.findOneAndDelete({_id: body._id, user_id: req.user.user_id})
    } catch (e) {
      throw Error(e)
    }
  }

  findAll() {
    return `This action returns all spinWheel`;
  }

  findOne(id: number) {
    return `This action returns a #${id} spinWheel`;
  }

  update(id: number, updateSpinWheelDto: UpdateSpinWheelDto) {
    return `This action updates a #${id} spinWheel`;
  }

  remove(id: number) {
    return `This action removes a #${id} spinWheel`;
  }
}
