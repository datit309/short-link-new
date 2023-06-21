import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LinkService } from './link.service';
import { CreateLinkDto } from './dto/create-link.dto';
import { UpdateLinkDto } from './dto/update-link.dto';
import {GetLinkDto} from "./dto/get-link.dto";

@Controller('link')
export class LinkController {
  constructor(private readonly linkService: LinkService) {}

  @Post('create')
  createLink(@Body() body: CreateLinkDto) {
    return this.linkService.createLink(body);
  }

  @Post()
  getLink(@Body() body: GetLinkDto) {
    return this.linkService.findOne(body.short_link, body.password);
  }

}
