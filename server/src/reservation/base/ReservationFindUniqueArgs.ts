import { ArgsType, Field } from "@nestjs/graphql";
import { ReservationWhereUniqueInput } from "./ReservationWhereUniqueInput";

@ArgsType()
class ReservationFindUniqueArgs {
  @Field(() => ReservationWhereUniqueInput, { nullable: false })
  where!: ReservationWhereUniqueInput;
}

export { ReservationFindUniqueArgs };
