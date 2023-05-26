import { Test, TestingModule } from '@nestjs/testing';
import { AdminEntityService } from './admin-entity.service';

describe('AdminEntityService', () => {
  let service: AdminEntityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdminEntityService],
    }).compile();

    service = module.get<AdminEntityService>(AdminEntityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
