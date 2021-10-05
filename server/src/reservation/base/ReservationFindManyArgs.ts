import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ReservationWhereInput } from "./ReservationWhereInput";
import { Type } from "class-transformer";
import { ReservationOrderByInput } from "./ReservationOrderByInput";

@ArgsType()
class ReservationFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ReservationWhereInput,
  })
  @Field(() => ReservationWhereInput, { nullable: true })
  @Type(() => ReservationWhereInput)
  where?: ReservationWhereInput;

  @ApiProperty({
    required: false,
    type: ReservationOrderByInput,
  })
  @Field(() => ReservationOrderByInput, { nullable: true })
  @Type(() => ReservationOrderByInput)
  orderBy?: ReservationOrderByInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { ReservationFindManyArgs };
