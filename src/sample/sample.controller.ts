import { Controller, Get, Param } from '@nestjs/common';
import { SampleService } from './sample.service';

@Controller('sample')
export class SampleController {
  constructor(private sampleService: SampleService) {}

  @Get()
  list() {
    return this.sampleService.getAllEntries();
  }

  @Get(':id')
  getById(@Param('id') id: number) {
    return this.sampleService.getEntryById(id);
  }
}
