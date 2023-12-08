import { Document, SchemaTypes } from 'mongoose'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Type } from 'class-transformer'
import { UserEntity, UserEntitySchema } from '../../user/entities/user.entity'
import * as paginate from 'mongoose-paginate-v2'
import { AuthGroupEntity } from '../../user/entities/group.entity'
import {SpinWheelEntity} from "./spin-wheel.entity";

@Schema({ versionKey: false, collection: 'spin_wheel_histories', timestamps: true })
export class SpinWheelHistoryEntity {
    @Prop({
        required: true,
        type: SchemaTypes.ObjectId,
        ref: SpinWheelEntity.name,
        index: true,
    })
    @Type(() => SpinWheelEntity)
    spin_id: SpinWheelEntity

    @Prop({ required: true, type: Object }) // kết quả quay
    result: any

    @Prop({ required: true, uppercase: true, default: 'PENDING' }) // SUCCESS
    status: string
}

export type SpinWheelHistoryEntityDocument = SpinWheelHistoryEntity & Document
export const SpinWheelHistoryEntitySchema = SchemaFactory.createForClass(SpinWheelHistoryEntity)
SpinWheelHistoryEntitySchema.plugin(paginate)
