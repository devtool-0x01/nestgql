import { Test, TestingModule } from '@nestjs/testing';
import { BugsResolver } from './bugs.resolver';

describe('BugsResolver', () => {
  let resolver: BugsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BugsResolver],
    }).compile();

    resolver = module.get<BugsResolver>(BugsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
