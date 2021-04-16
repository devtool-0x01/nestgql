import { Test, TestingModule } from '@nestjs/testing';
import { BugsService } from './bugs.service';

describe('bugsService', () => {
  let service: BugsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BugsService],
    }).compile();

    service = module.get<BugsService>(BugsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
