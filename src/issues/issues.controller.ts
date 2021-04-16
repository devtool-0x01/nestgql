import { Controller, Get, Param } from '@nestjs/common';
import { BugsService } from './bugs/bugs.service';
import { ProjectService } from './projects/project.service';

@Controller('issues')
export class IssuesController {
  constructor(
    private readonly projectService: ProjectService,
    private readonly bugsService: BugsService,
  ) {}

  @Get('projects')
  projects() {
    return this.projectService.findAll();
  }

  @Get('projects/:id')
  project(@Param('id') id: number) {
    return this.projectService.findOne(id);
  }

  @Get('projects/:id/bugs')
  bugs(@Param('id') projectId: number) {
    return this.bugsService.findForProject(projectId);
  }
}
