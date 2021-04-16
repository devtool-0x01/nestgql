import { Injectable, NotImplementedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProjectInput } from '../dto/create-project.input';
import { UpdateProjectInput } from '../dto/update-project.input';
import { Project } from '../entities/project.entity';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepo: Repository<Project>,
  ) {}

  async create(createProjectInput: CreateProjectInput) {
    const project = this.projectRepo.create({
      ...createProjectInput,
    });
    return this.projectRepo.save(project);
  }

  async findAll() {
    return this.projectRepo.find();
  }

  async findOne(id: number) {
    return this.projectRepo.findOne(id);
  }

  async update(id: number, updateProjectInput: UpdateProjectInput) {
    const { description, name } = updateProjectInput;
    await this.projectRepo.update(id, { name, description });
    return true;
  }

  async remove(id: number) {
    await this.projectRepo.delete(id);
    return true;
  }
}
