import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBugInput } from '../dto/create-bug.input';
import { UpdateBugInput } from '../dto/update-bug.input';
import { Bug } from '../entities/bug.entity';

@Injectable()
export class BugsService {
  constructor(
    @InjectRepository(Bug) private readonly bugsRepo: Repository<Bug>,
  ) {}

  async findForProject(projectId: number) {
    return this.bugsRepo.find({
      where: {
        projectId,
      },
    });
  }

  async getById(id: number) {
    return this.bugsRepo.findOne(id);
  }

  async addBug(bugInput: CreateBugInput) {
    const bug = this.bugsRepo.create(bugInput);
    return this.bugsRepo.save(bug);
  }

  async updateBug(id: number, bugInput: UpdateBugInput) {
    // console.log('updating bug : ', bugInput);
    const { description, title } = bugInput;
    await this.bugsRepo.save({ id, title, description });
    return true;
  }

  async removeBug(id: number) {
    await this.bugsRepo.delete(id);
    return true;
  }

  async markAsRsolved(id: number) {
    await this.bugsRepo.update(id, { resolved: true });
    return true;
  }
}
