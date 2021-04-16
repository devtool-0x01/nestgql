import { InputType, Field, Int, PartialType, OmitType } from '@nestjs/graphql';
import { CreateBugInput } from './create-bug.input';

@InputType()
export class UpdateBugInput extends PartialType(
  OmitType(CreateBugInput, ['projectId']),
) {
  @Field(() => Int)
  id: number;
}
