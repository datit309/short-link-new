import { PartialType } from '@nestjs/swagger';
import { CreateSpinWheelDto } from './create-spin-wheel.dto';

export class UpdateSpinWheelDto extends PartialType(CreateSpinWheelDto) {}
