import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ChauffeurWhereInput } from "./ChauffeurWhereInput";
import { Type } from "class-transformer";
import { ChauffeurOrderByInput } from "./ChauffeurOrderByInput";

@ArgsType()
class ChauffeurFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ChauffeurWhereInput,
  })
  @Field(() => ChauffeurWhereInput, { nullable: true })
  @Type(() => ChauffeurWhereInput)
  where?: ChauffeurWhereInput;

  @ApiProperty({
    required: false,
    type: ChauffeurOrderByInput,
  })
  @Field(() => ChauffeurOrderByInput, { nullable: true })
  @Type(() => ChauffeurOrderByInput)
  orderBy?: ChauffeurOrderByInput;

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

export { ChauffeurFindManyArgs };
