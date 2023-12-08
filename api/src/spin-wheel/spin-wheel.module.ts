import {CacheModule, Module} from '@nestjs/common';
import { SpinWheelService } from './spin-wheel.service';
import { SpinWheelController } from './spin-wheel.controller';
import {UserEntity, UserEntitySchema} from "../user/entities/user.entity";
import {SpinWheelEntity, SpinWheelEntitySchema} from "./entities/spin-wheel.entity";
import {SpinWheelHistoryEntity, SpinWheelHistoryEntitySchema} from "./entities/spin-history.entity";
import {MongooseModule} from "@nestjs/mongoose";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: UserEntity.name, schema: UserEntitySchema },
      { name: SpinWheelEntity.name, schema: SpinWheelEntitySchema },
      { name: SpinWheelHistoryEntity.name, schema: SpinWheelHistoryEntitySchema },
    ]),
    CacheModule.register(),
  ],
  controllers: [SpinWheelController],
  providers: [SpinWheelService]
})
export class SpinWheelModule {}
