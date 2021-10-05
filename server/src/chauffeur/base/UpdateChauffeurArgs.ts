import { ArgsType, Field } from "@nestjs/graphql";
import { ChauffeurWhereUniqueInput } from "./ChauffeurWhereUniqueInput";
import { ChauffeurUpdateInput } from "./ChauffeurUpdateInput";

@ArgsType()
class UpdateChauffeurArgs {
  @Field(() => ChauffeurWhereUniqueInput, { nullable: false })
  where!: ChauffeurWhereUniqueInput;
  @Field(() => ChauffeurUpdateInput, { nullable: false })
  data!: ChauffeurUpdateInput;
}

export { UpdateChauffeurArgs };
