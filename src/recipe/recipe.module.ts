import { Module } from '@nestjs/common';
import { RecipeService } from './recipe.service';
import { RecipeResolver } from './recipe.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Recipe } from './entities/recipe.entity';
import { RecipeController } from './recipe.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Recipe])],
  providers: [RecipeResolver, RecipeService],
  controllers: [RecipeController],
})
export class RecipeModule {}
