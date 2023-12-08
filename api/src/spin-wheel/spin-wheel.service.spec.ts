import { Test, TestingModule } from '@nestjs/testing';
import { SpinWheelService } from './spin-wheel.service';

describe('SpinWheelService', () => {
  let service: SpinWheelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SpinWheelService],
    }).compile();

    service = module.get<SpinWheelService>(SpinWheelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
