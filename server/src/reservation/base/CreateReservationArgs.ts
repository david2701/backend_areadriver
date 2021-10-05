import { ArgsType, Field } from "@nestjs/graphql";
import { ReservationCreateInput } from "./ReservationCreateInput";

@ArgsType()
class CreateReservationArgs {
  @Field(() => ReservationCreateInput, { nullable: false })
  data!: ReservationCreateInput;
}

export { CreateReservationArgs };
