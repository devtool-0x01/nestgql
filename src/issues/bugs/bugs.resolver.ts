import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateBugInput } from '../dto/create-bug.input';
import { UpdateBugInput } from '../dto/update-bug.input';
import { Bug } from '../entities/bug.entity';
import { BugsService } from './bugs.service';

@Resolver(() => Bug)
export class BugsResolver {
  constructor(private readonly bugsService: BugsService) {}

  @Query(() => [Bug])
  getBugs(@Args('projectId', { type: () => Int }) projectId: number) {
    return this.bugsService.findForProject(projectId);
  }

  @Mutation(() => Bug)
  registerBug(@Args('createBugInput') createBugInput: CreateBugInput) {
    return this.bugsService.addBug(createBugInput);
  }

  @Mutation(() => Boolean)
  updateBug(@Args('updateBugInput') updateBugInput: UpdateBugInput) {
    return this.bugsService.updateBug(updateBugInput.id, updateBugInput);
  }

  @Mutation(() => Boolean)
  deleteBug(@Args('id', { type: () => Int }) bugId: number) {
    return this.bugsService.removeBug(bugId);
  }

  @Mutation(() => Boolean)
  markBugAsResolved(@Args('bugId', { type: () => Int }) bugId: number) {
    return this.bugsService.markAsRsolved(bugId);
  }
}
