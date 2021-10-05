import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ChauffeurWhereInput = {
  id?: StringFilter;
  modLeDeVoiture?: StringNullableFilter;
  nomDuChauffeur?: StringFilter;
  plaqueDImmatriculation?: StringFilter;
};
