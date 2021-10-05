import { ArgsType, Field } from "@nestjs/graphql";
import { ChauffeurCreateInput } from "./ChauffeurCreateInput";

@ArgsType()
class CreateChauffeurArgs {
  @Field(() => ChauffeurCreateInput, { nullable: false })
  data!: ChauffeurCreateInput;
}

export { CreateChauffeurArgs };
