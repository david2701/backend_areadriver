import { ArgsType, Field } from "@nestjs/graphql";
import { ReservationWhereUniqueInput } from "./ReservationWhereUniqueInput";

@ArgsType()
class DeleteReservationArgs {
  @Field(() => ReservationWhereUniqueInput, { nullable: false })
  where!: ReservationWhereUniqueInput;
}

export { DeleteReservationArgs };
