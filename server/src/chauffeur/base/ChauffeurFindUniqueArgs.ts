import { ArgsType, Field } from "@nestjs/graphql";
import { ChauffeurWhereUniqueInput } from "./ChauffeurWhereUniqueInput";

@ArgsType()
class ChauffeurFindUniqueArgs {
  @Field(() => ChauffeurWhereUniqueInput, { nullable: false })
  where!: ChauffeurWhereUniqueInput;
}

export { ChauffeurFindUniqueArgs };
