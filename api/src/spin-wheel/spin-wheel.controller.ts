import {Controller, Get, Post, Body, Patch, Param, Delete, Req, UseGuards} from '@nestjs/common';
import { SpinWheelService } from './spin-wheel.service';
import { CreateSpinWheelDto } from './dto/create-spin-wheel.dto';
import { UpdateSpinWheelDto } from './dto/update-spin-wheel.dto';
import {Roles} from "../auth/roles.decorator";
import {Role} from "../auth/enums/role.enum";
import {JwtAuthGuard} from "../auth/guards/jwt-auth.guard";
import {RoleGuard} from "../auth/guards/role.guard";

@Controller('spin-wheel')
export class SpinWheelController {
  constructor(private readonly spinWheelService: SpinWheelService) {}

  // @Roles(Role.MANAGER, 'client')
  // @UseGuards(JwtAuthGuard, RoleGuard)
  @Post('detail')
  getOne(@Body() createSpinWheelDto, @Req() req) {
    return this.spinWheelService.getOneSpinWheel(createSpinWheelDto, req);
  }
  @Roles(Role.MANAGER, 'client')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Post('list')
  getAll(@Body() createSpinWheelDto, @Req() req) {
    return this.spinWheelService.getAllSpinWheel(createSpinWheelDto, req);
  }
  @Roles(Role.MANAGER, 'client')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Post('create')
  create(@Body() createSpinWheelDto, @Req() req) {
    return this.spinWheelService.create(createSpinWheelDto, req);
  }

  // @Roles(Role.MANAGER, 'client')
  // @UseGuards(JwtAuthGuard, RoleGuard)
  @Post('update')
  update(@Body() createSpinWheelDto, @Req() req) {
    return this.spinWheelService.updateSpinWheel(createSpinWheelDto, req);
  }

  @Roles(Role.MANAGER, 'client')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Post('delete')
  delete(@Body() createSpinWheelDto, @Req() req) {
    return this.spinWheelService.deleteSpinWheel(createSpinWheelDto, req);
  }
}
