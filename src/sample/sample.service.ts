import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SampleEntity } from './entities/sample.entity';

function throwIfNotValidValue(val: string) {
  if (!val || val.length > 50) {
    throw new Error('Invalid value, value must have length between 1 and 50.');
  }
}

@Injectable()
export class SampleService {
  constructor(
    @InjectRepository(SampleEntity)
    private sampleRepo: Repository<SampleEntity>,
  ) {}

  getHello(): string {
    return 'hello World';
  }

  async getAllEntries(): Promise<SampleEntity[]> {
    return this.sampleRepo.find({});
  }

  async getEntryById(id: number): Promise<SampleEntity | null> {
    return this.sampleRepo.findOne(id);
  }

  async createEntry(val: string): Promise<SampleEntity> {
    throwIfNotValidValue(val);
    const entry = this.sampleRepo.create({ value: val });
    const result = await this.sampleRepo.save(entry);
    return result;
  }

  async updateEntry(id: number, val: string): Promise<boolean> {
    throwIfNotValidValue(val);
    await this.sampleRepo.update(id, { value: val });
    return true;
  }

  async deleteEntry(id: number): Promise<boolean> {
    await this.sampleRepo.delete(id);
    return true;
  }
}
