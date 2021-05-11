import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { ThrottlerGuard } from '@nestjs/throttler';
import { RecipeService } from './recipe.service';
// import { Recipe } from './entities/recipe.entity';
import { CreateRecipeInput } from './dto/create-recipe.input';
import { UpdateRecipeInput } from './dto/update-recipe.input';
import { RecipeDto } from './dto/recipe.dto';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '../common/auth.guard';
import { IsPublic } from '../common/is-public.decorator';

@UseGuards(AuthGuard)
@Resolver(() => RecipeDto)
export class RecipeResolver {
  constructor(private readonly recipeService: RecipeService) {}

  // @ResolveField(() => [String])
  // instructions(@Parent() recipe: Recipe) {
  //   return recipe.instructions?.split('|');
  // }

  // @ResolveField(() => [String])
  // ingredients(@Parent() recipe: Recipe) {
  //   return recipe.ingredients?.split('|');
  // }
  @IsPublic()
  @Query(() => [RecipeDto], { name: 'recipes' })
  findAll(
    @Args('take', { type: () => Int, defaultValue: 10, nullable: true })
    takeCount: number = 10,
  ) {
    return this.recipeService.findAll(takeCount);
  }

  @IsPublic()
  @Query(() => RecipeDto, { name: 'recipe', nullable: true })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.recipeService.getById(id);
  }

  @Mutation(() => RecipeDto)
  createRecipe(
    @Args('createRecipeInput') createRecipeInput: CreateRecipeInput,
  ) {
    console.log(createRecipeInput);
    return this.recipeService.create(createRecipeInput);
  }

  @Mutation(() => RecipeDto, { nullable: true })
  updateRecipe(
    @Args('updateRecipeInput') updateRecipeInput: UpdateRecipeInput,
  ): Promise<RecipeDto | null> {
    return this.recipeService.update(updateRecipeInput.id, updateRecipeInput);
  }

  @Mutation(() => Boolean)
  deleteRecipe(@Args('id', { type: () => Int }) id: number) {
    return this.recipeService.remove(id);
  }
}
