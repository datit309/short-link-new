import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';
import { Type } from 'class-transformer';
import * as paginate from 'mongoose-paginate-v2';

@Schema({ versionKey: false, collection: 'posts', timestamps: true })
export class PostEntity {

    @Prop({ required: false, default: null })
    title: string;

    @Prop({ required: true, default: null })
    description: string;

    @Prop({ required: false, default: null })
    thumbnail: string;

    @Prop({ required: false, default: null })
    slug: string;
}

export type PostEntityDocument = PostEntity & Document;
export const PostEntitySchema = SchemaFactory.createForClass(PostEntity);
PostEntitySchema.plugin(paginate);
