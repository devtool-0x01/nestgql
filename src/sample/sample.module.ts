import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SampleEntity } from './entities/sample.entity';
import { SampleController } from './sample.controller';
import { SampleResolver } from './sample.resolver';
import { SampleService } from './sample.service';

@Module({
  imports: [TypeOrmModule.forFeature([SampleEntity])],
  controllers: [SampleController],
  providers: [SampleService, SampleResolver],
})
export class SampleModule {}
