import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  NotFoundException,
  Query,
  Optional,
} from '@nestjs/common';
import { RecipeService } from './recipe.service';

@Controller('recipes')
export class RecipeController {
  constructor(private readonly recipeService: RecipeService) {}

  @Get()
  getRecipes(@Query('take') itemsToTake?: number) {
    itemsToTake = +itemsToTake || 10;
    return this.recipeService.findAll(itemsToTake);
  }

  @Get(':id')
  async getRecipe(@Param('id', ParseIntPipe) id: number) {
    const r = await this.recipeService.getById(id);
    if (!r) {
      throw new NotFoundException();
    }
    return r;
  }
}
