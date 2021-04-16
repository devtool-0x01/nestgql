import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRecipeInput } from './dto/create-recipe.input';
import { RecipeDto } from './dto/recipe.dto';
import { UpdateRecipeInput } from './dto/update-recipe.input';
import { Recipe } from './entities/recipe.entity';

function mapToRecipeDto(recipe: Recipe): RecipeDto | null {
  if (!recipe) {
    return null;
  }
  return {
    ...recipe,
    ingredients: recipe.ingredients.split('|'),
    instructions: recipe.instructions.split('|'),
  };
}

@Injectable()
export class RecipeService {
  // TODO: remove direct dependency on typeorm repository
  constructor(
    @InjectRepository(Recipe) private recipeRepo: Repository<Recipe>,
  ) {}

  async create(createRecipeInput: CreateRecipeInput): Promise<RecipeDto> {
    const { title, description, ingredients, instructions } = createRecipeInput;
    const recipe = this.recipeRepo.create({
      title,
      description,
      ingredients: ingredients.join('|'),
      instructions: instructions.join('|'),
    });
    await this.recipeRepo.save(recipe);
    return mapToRecipeDto(recipe);
  }

  async findAll(limit: number = 10): Promise<RecipeDto[]> {
    // const max = Math.min(10, limit);
    const recipes = await this.recipeRepo.find({
      take: limit,
    });
    return recipes.map((r) => {
      return mapToRecipeDto(r);
    });
  }

  async getById(id: number): Promise<RecipeDto | null> {
    const recipe = await this.recipeRepo.findOne(id);
    if (!recipe) {
      return null;
    }
    return mapToRecipeDto(recipe);
  }

  async update(
    id: number,
    updateRecipeInput: UpdateRecipeInput,
  ): Promise<RecipeDto | null> {
    const recipe = await this.recipeRepo.findOne(id);
    if (!recipe) {
      return null;
    }
    // TODO: clean and simplify this section
    const {
      description,
      title,
      instructions: rawInstructions,
      ingredients: rawIngredients,
    } = updateRecipeInput;
    const ingredients = rawIngredients?.join('|');
    const instructions = rawInstructions?.join('|');
    const result = await this.recipeRepo.update(id, {
      title: title || recipe.title,
      description: description || recipe.description,
      instructions: instructions || recipe.instructions,
      ingredients: ingredients || recipe.ingredients,
    });

    // TODO: Fix output to include updated recipe
    // recipe.instructions = instructions;
    // recipe.ingredients = ingredients;
    return mapToRecipeDto(recipe);
  }

  async remove(id: number): Promise<boolean> {
    // await this.recipeRepo.delete(id);
    const deleted = await this.recipeRepo.delete(id);
    return deleted.affected && deleted.affected > 0;
  }
}
