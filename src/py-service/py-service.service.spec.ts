import { Test, TestingModule } from '@nestjs/testing';
import { PyServiceService } from './py-service.service';

describe('PyServiceService', () => {
  let service: PyServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PyServiceService],
    }).compile();

    service = module.get<PyServiceService>(PyServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
