import {Controller, Get, Post, Body, Patch, Param, Delete, Req, Res, HttpStatus} from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import {GetLinkDto} from "../link/dto/get-link.dto";

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post('list')
  async getListPost(@Body() body, @Req() req, @Res() res) {
    try {
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
