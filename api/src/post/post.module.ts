import {CacheModule, Module} from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import {PostEntity, PostEntitySchema} from "./entities/post.entity";
import {MongooseModule} from "@nestjs/mongoose";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: PostEntity.name, schema: PostEntitySchema },
    ]),
  ],
  controllers: [PostController],
  providers: [PostService]
})
export class PostModule {}
