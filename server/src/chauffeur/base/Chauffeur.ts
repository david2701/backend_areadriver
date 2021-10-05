import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ValidateNested, IsOptional, IsDate, IsString } from "class-validator";
import { Type } from "class-transformer";
@ObjectType()
class Chauffeur {
  @ApiProperty({
    required: false,
    type: () => Chauffeur,
  })
  @ValidateNested()
  @Type(() => Chauffeur)
  @IsOptional()
  chauffeur?: Chauffeur | null;

  @ApiProperty({
    required: false,
    type: () => [Chauffeur],
  })
  @ValidateNested()
  @Type(() => Chauffeur)
  @IsOptional()
  conducteurAssign?: Array<Chauffeur>;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  modLeDeVoiture!: string | null;

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

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}
export { Chauffeur };
