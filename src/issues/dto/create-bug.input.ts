import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateBugInput {
  @Field(() => Int)
  projectId: number;

  @Field(() => String)
  title: string;

  @Field()
  description: string;
}
