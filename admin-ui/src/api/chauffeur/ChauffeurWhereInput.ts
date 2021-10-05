import { ChauffeurWhereUniqueInput } from "./ChauffeurWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ChauffeurWhereInput = {
  chauffeur?: ChauffeurWhereUniqueInput;
  id?: StringFilter;
  modLeDeVoiture?: StringNullableFilter;
  nomDuChauffeur?: StringFilter;
  plaqueDImmatriculation?: StringFilter;
};
