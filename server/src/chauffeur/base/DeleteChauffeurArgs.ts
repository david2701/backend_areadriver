import { ArgsType, Field } from "@nestjs/graphql";
import { ChauffeurWhereUniqueInput } from "./ChauffeurWhereUniqueInput";

@ArgsType()
class DeleteChauffeurArgs {
  @Field(() => ChauffeurWhereUniqueInput, { nullable: false })
  where!: ChauffeurWhereUniqueInput;
}

export { DeleteChauffeurArgs };
