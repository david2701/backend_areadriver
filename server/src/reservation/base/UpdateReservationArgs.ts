import { ArgsType, Field } from "@nestjs/graphql";
import { ReservationWhereUniqueInput } from "./ReservationWhereUniqueInput";
import { ReservationUpdateInput } from "./ReservationUpdateInput";

@ArgsType()
class UpdateReservationArgs {
  @Field(() => ReservationWhereUniqueInput, { nullable: false })
  where!: ReservationWhereUniqueInput;
  @Field(() => ReservationUpdateInput, { nullable: false })
  data!: ReservationUpdateInput;
}

export { UpdateReservationArgs };
