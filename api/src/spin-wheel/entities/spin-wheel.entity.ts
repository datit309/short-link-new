import { Document, SchemaTypes } from 'mongoose'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Type } from 'class-transformer'
import { UserEntity, UserEntitySchema } from '../../user/entities/user.entity'
import * as paginate from 'mongoose-paginate-v2'

@Schema({ versionKey: false, collection: 'spin_wheels', timestamps: true })
export class SpinWheelEntity {
    @Prop({
        required: false,
        type: SchemaTypes.ObjectId,
        ref: UserEntity.name,
    })
    @Type(() => UserEntity)
    user_id: UserEntity

    @Prop({
        required: false,
        type: String,
        ref: UserEntity.name,
    })
    @Type(() => UserEntity)
    username: UserEntity

    @Prop({ required: true, default: 0 })
    turns: number

    @Prop({ required: true, default: 0 })
    turned: number

    @Prop({ required: true, uppercase: true, default: 'ACTIVE' })
    status: string

    @Prop({ required: false, default: null, type: Array})
    list_item_spin: any
}

export type SpinWheelEntityDocument = SpinWheelEntity & Document
export const SpinWheelEntitySchema = SchemaFactory.createForClass(SpinWheelEntity)
SpinWheelEntitySchema.plugin(paginate)
