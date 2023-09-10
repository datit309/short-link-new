import {Controller, Get, Post, Body, Patch, Param, Delete, Req, Res, HttpStatus} from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import {GetLinkDto} from "../link/dto/get-link.dto";
import Telegram from "../utils/telegram";

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post('list')
  async getListPost(@Body() body, @Req() req, @Res() res) {
    try {
      const ip = req.headers['x-real-ip'] || req['connection']['remoteAddress'];
      Telegram.send(`
      --------------------------------
      Request from: ${body['username'] ? body['username'] + ' - ' + ip : ip} \n
      --------------------------------
      `)
      return res.status(HttpStatus.OK).send({
        data: await this.postService.findAll(body.page, body.limit),
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
  async getOnePost(@Body() body, @Req() req, @Res() res) {
    try {
      const ip = req.headers['x-real-ip'] || req['connection']['remoteAddress'];
      Telegram.send(`
      --------------------------------
      Click from: /${body.slug} | ${body['username'] ? body['username'] + ' - ' + ip : ip} \n
      --------------------------------
      `)
      return res.status(HttpStatus.OK).send({
        data: await this.postService.findOne(body.slug),
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
