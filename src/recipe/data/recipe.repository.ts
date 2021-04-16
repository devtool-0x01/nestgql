import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Recipe } from '../entities/recipe.entity';

@Injectable()
export class RecipeList {
  constructor(
    @InjectRepository(Recipe) private recipeRepo: Repository<Recipe>,
  ) {}

  async getAll() {
    return this.recipeRepo.find();
  }

  async getById(id: number) {
    return this.recipeRepo.findOne(id);
  }

  async add(recipe: Recipe) {
    return this.recipeRepo.save(recipe);
  }

  async update(id: number, recipe: Recipe) {
    await this.recipeRepo.update(id, {
      ...recipe,
    });
    return true;
  }

  async remove(id: number) {
    await this.recipeRepo.delete(id);
    return true;
  }
}
