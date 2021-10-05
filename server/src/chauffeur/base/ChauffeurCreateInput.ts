import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ChauffeurWhereUniqueInput } from "./ChauffeurWhereUniqueInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
@InputType()
class ChauffeurCreateInput {
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
  chauffeur?: ChauffeurWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  modLeDeVoiture?: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  nomDuChauffeur!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  plaqueDImmatriculation!: string;
}
export { ChauffeurCreateInput };
