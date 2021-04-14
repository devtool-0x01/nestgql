import { Query, Resolver, Args, Mutation, Int } from '@nestjs/graphql';
import { SampleService } from './sample.service';
import { SampleEntity } from './entities/sample.entity';

@Resolver()
export class SampleResolver {
  constructor(private sampleService: SampleService) {}

  @Query((type) => String)
  hello() {
    // return 'hello world';
    return this.sampleService.getHello();
  }

  @Query((type) => [SampleEntity])
  getSampleEntries(): Promise<SampleEntity[]> {
    return this.sampleService.getAllEntries();
  }

  @Query((t) => SampleEntity, { nullable: true })
  getSampleEntry(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<SampleEntity> {
    return this.sampleService.getEntryById(id);
  }

  @Mutation((t) => SampleEntity)
  async createSampleEntry(
    @Args('val', { type: () => String }) val: string,
  ): Promise<SampleEntity> {
    return this.sampleService.createEntry(val);
  }

  @Mutation((t) => Boolean)
  async updateSampleEntry(
    @Args('val', { type: () => String }) val: string,
    @Args('id', { type: () => Int }) id: number,
  ): Promise<Boolean> {
    return this.sampleService.updateEntry(id, val);
  }

  @Mutation((t) => Boolean)
  async deleteSampleEntry(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<Boolean> {
    return this.sampleService.deleteEntry(id);
  }
}
