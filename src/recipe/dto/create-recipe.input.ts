import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateRecipeInput {
  // TODO: Add validaion rules

  @Field(() => String)
  title: string;

  @Field()
  description: string;

  @Field(() => [String])
  instructions: string[];

  @Field(() => [String])
  ingredients: string[];
}
