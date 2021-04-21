import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  NotFoundException,
  Query,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from 'src/auth.guard';
import { AllowAnonymous, IsPublic } from 'src/is-public.decorator';
import { RecipeService } from './recipe.service';

@UseGuards(AuthGuard)
@Controller('recipes')
export class RecipeController {
  constructor(private readonly recipeService: RecipeService) {}

  @IsPublic()
  @Get()
  getRecipes(@Query('take') itemsToTake?: number) {
    itemsToTake = +itemsToTake || 10;
    return this.recipeService.findAll(itemsToTake);
  }

  @AllowAnonymous()
  @Get(':id')
  async getRecipe(@Param('id', ParseIntPipe) id: number) {
    const r = await this.recipeService.getById(id);
    if (!r) {
      throw new NotFoundException();
    }
    return r;
  }
}
