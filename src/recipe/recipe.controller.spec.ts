import { Test, TestingModule } from '@nestjs/testing';
import { RecipeController } from './recipe.controller';

describe('RecipeController', () => {
  let controller: RecipeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecipeController],
    }).compile();

    controller = module.get<RecipeController>(RecipeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return given number of items', () => {
    expect(controller.getRecipes(3)).toHaveLength(3);
  });
});
