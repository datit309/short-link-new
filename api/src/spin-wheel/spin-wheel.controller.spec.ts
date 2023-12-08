import { Test, TestingModule } from '@nestjs/testing';
import { SpinWheelController } from './spin-wheel.controller';
import { SpinWheelService } from './spin-wheel.service';

describe('SpinWheelController', () => {
  let controller: SpinWheelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SpinWheelController],
      providers: [SpinWheelService],
    }).compile();

    controller = module.get<SpinWheelController>(SpinWheelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
