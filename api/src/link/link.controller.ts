import {Controller, Get, Post, Body, Patch, Param, Delete, Res, Req, HttpStatus} from '@nestjs/common';
import { LinkService } from './link.service';
import { CreateLinkDto } from './dto/create-link.dto';
import { UpdateLinkDto } from './dto/update-link.dto';
import {GetLinkDto} from "./dto/get-link.dto";

@Controller('link')
export class LinkController {
  constructor(private readonly linkService: LinkService) {}

  @Post('create')
  async createLink(@Body() body: CreateLinkDto, @Req() req, @Res() res) {
    try {
      let data = await this.linkService.createLink(body);
      if(data.message){
        throw new Error(data.message)
      }
      return res.status(HttpStatus.OK).send({
        data: data,
        success: true,
        message: 'request success'
      });
    } catch (e) {
      return res.status(HttpStatus.BAD_REQUEST).send({
        data: null,
        success: false,
        message: e.message
      });
    }
  }

  @Post('get')
  async getLink(@Body() body: GetLinkDto, @Req() req, @Res() res) {
    try {
      let data = await this.linkService.findOne(body.short_link)
      if(data.message){
        throw new Error(data.message)
      }
      return res.status(HttpStatus.OK).send({
        data: data,
        success: true,
        message: 'request success'
      });
    } catch (e) {
      return res.status(HttpStatus.BAD_REQUEST).send({
        data: null,
        success: false,
        message: e.message
      });
    }

  }

  @Post('get-link-password')
  async getLinkWithPassword(@Body() body: GetLinkDto, @Req() req, @Res() res) {
    try {
      let data = await this.linkService.checkPassword(body.short_link, body.password)
      if(data.message){
        throw new Error(data.message)
      }
      return res.status(HttpStatus.OK).send({
        data: data,
        success: true,
        message: 'request success'
      });
    } catch (e) {
      return res.status(HttpStatus.BAD_REQUEST).send({
        data: null,
        success: false,
        message: e.message
      });
    }

  }

}
