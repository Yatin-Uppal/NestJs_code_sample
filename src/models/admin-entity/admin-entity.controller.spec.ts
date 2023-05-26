import { Test, TestingModule } from '@nestjs/testing';
import { AdminEntityController } from './admin-entity.controller';
import { AdminEntityService } from './admin-entity.service';

describe('AdminEntityController', () => {
  let controller: AdminEntityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdminEntityController],
      providers: [AdminEntityService],
    }).compile();

    controller = module.get<AdminEntityController>(AdminEntityController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
