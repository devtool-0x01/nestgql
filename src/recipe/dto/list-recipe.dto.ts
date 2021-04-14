import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType('Recipe', { description: 'A recipe' })
export class RecipeDto {
  @Field((t) => Int)
  id: number;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field((t) => [String])
  ingredients: string[];

  @Field((t) => [String])
  instructions: string[];

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
