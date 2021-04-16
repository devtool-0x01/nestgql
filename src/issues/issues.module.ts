import { Module } from '@nestjs/common';
import { ProjectService } from './projects/project.service';
import { ProjectResolver } from './projects/project.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from './entities/project.entity';
import { Bug } from './entities/bug.entity';
import { IssuesController } from './issues.controller';
import { BugsService } from './bugs/bugs.service';
import { BugsResolver } from './bugs/bugs.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Project, Bug])],
  providers: [ProjectResolver, BugsResolver, ProjectService, BugsService],
  controllers: [IssuesController],
})
export class IssuesModule {}
