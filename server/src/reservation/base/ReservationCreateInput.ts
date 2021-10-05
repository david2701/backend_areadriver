import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  IsOptional,
  ValidateNested,
  IsInt,
  IsDate,
} from "class-validator";
import { ChauffeurWhereUniqueInput } from "../../chauffeur/base/ChauffeurWhereUniqueInput";
import { Type } from "class-transformer";
@InputType()
class ReservationCreateInput {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  arrivE!: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  commentairesSupplMentaires?: string | null;

  @ApiProperty({
    required: false,
    type: () => ChauffeurWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ChauffeurWhereUniqueInput)
  @IsOptional()
  @Field(() => ChauffeurWhereUniqueInput, {
    nullable: true,
  })
  conducteurAssign?: ChauffeurWhereUniqueInput | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  dPart!: string;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  nombreDePersonnes?: number | null;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  nomDuClient!: number;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  quand!: Date;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  vol?: string | null;
}
export { ReservationCreateInput };
