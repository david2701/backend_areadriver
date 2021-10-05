import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ChauffeurWhereUniqueInput } from "./ChauffeurWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
@InputType()
class ChauffeurWhereInput {
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
  chauffeur?: ChauffeurWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  modLeDeVoiture?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  nomDuChauffeur?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  plaqueDImmatriculation?: StringFilter;
}
export { ChauffeurWhereInput };
