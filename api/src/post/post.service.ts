import {CACHE_MANAGER, HttpException, HttpStatus, Inject, Injectable} from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import {PaginateModel} from "mongoose";
import { InjectModel } from '@nestjs/mongoose';
import puppeteer from 'puppeteer';
import {PostEntity, PostEntityDocument} from "./entities/post.entity";
import * as moment from "moment/moment";
import {Cron, CronExpression} from "@nestjs/schedule";
import Telegram from "../utils/telegram";

@Injectable()
export class PostService {
  constructor(
      @InjectModel(PostEntity.name)
      private modelPost: PaginateModel<PostEntityDocument>,
      ) {
    // this.crawler()
  }

  @Cron(CronExpression.EVERY_HOUR)
  async crawler() {
    const browser = await puppeteer.launch({ executablePath: '/usr/bin/chromium-browser', args: [ '--disable-gpu', '--disable-setuid-sandbox', '--no-sandbox', '--no-zygote' ] });
    const page = await browser.newPage();
    let totalPages = 100

    for (let j = 0; j < totalPages - 1; j++) {
      await page.goto(`https://bitly.com/blog/page/${j+1}`);
      const resultsSelector = '.post-title > a';
      const links = await page.evaluate(resultsSelector => {
        const anchors = Array.from(document.querySelectorAll(resultsSelector));
        return anchors.map(anchor => {
          // @ts-ignore
          return `${anchor.href}`;
        });
      }, resultsSelector);


      // console.log(links);
      if(links.length > 0) {
        for (let i = 0; i < links.length; i++) {
          await page.goto(links[i]);

          let thumbnail = await page.evaluate(() => {
            // @ts-ignore
            const anchors = Array.from(document.querySelectorAll('.post-hero > img'));
            // @ts-ignore
            return anchors[0].src
          });

          let title = await page.evaluate(() => {
            return document.getElementsByClassName('entry-title single-title')[0].textContent
                .replace(/bitly.com/g, "hideurl.top")
                .replace(/Bitly.com/g, "Hideurl.top")
                .replace(/Bitly/g, "Hideurl")
                .replace(/bitly/g, "hideurl")

          });
          const content = await page.evaluate(() => {
            return document.getElementsByClassName('cell large-9')[0].innerHTML
                .replace(/bitly.com/g, "hideurl.top")
                .replace(/Bitly.com/g, "Hideurl.top")
                .replace('bitly.com/pages/pricing', "hideurl.top")
                .replace('Bitly.com/pages/pricing', "Hideurl.top")
                .replace(/class="button button-primary"/g, 'class="btn btn-primary"')
                .replace(/class="content-padding"/g, 'class="content-padding p-3"')
                .replace(/Bitly/g, "Hideurl")
                .replace(/bitly/g, "hideurl")

          });

          let slug = new URL(links[i]);
          let find = await this.modelPost.findOne({ slug: slug})
          if(find) {
            continue;
          }
          await this.modelPost.findOneAndUpdate({
            slug: slug.pathname.replace('/blog/', '').replace('/','').replace('bitly', 'hideurl')
          },{
            title,
            description: content,
            thumbnail
          },{
            new: true,
            upsert: true
          })
          console.log('crawler success: ', slug);
        }
      } else {
        console.log('Not found post news')
      }

    }
    await browser.close();
  }
  create(createPostDto: CreatePostDto) {
    return 'This action adds a new post';
  }

  async findAll(page = 1, limit = 10) {
    try {
      let link = await this.modelPost.paginate({},{
        page,
        limit,
        sort: {
          createdAt: -1 //Sort by Date Added DESC
        }
      })
      if(!link) {
        throw new Error(`Post does not exist`)
      }
      return link;
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.BAD_REQUEST)
    }

  }

  async findOne(slug: string) {
    try {
      let link = await this.modelPost.findOne({
        slug,
      })
      if(!link) {
        throw new Error(`Post does not exist`)
      }

      return link
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.BAD_REQUEST)
    }
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
