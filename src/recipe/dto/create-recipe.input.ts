import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateRecipeInput {
  @Field(() => String)
  title: string;

  @Field()
  description: string;

  @Field(() => [String])
  instructions: string[];

  @Field(() => [String])
  ingredients: string[];
}
