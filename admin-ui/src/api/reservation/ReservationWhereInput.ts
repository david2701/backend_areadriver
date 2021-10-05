import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ChauffeurWhereUniqueInput } from "../chauffeur/ChauffeurWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { IntFilter } from "../../util/IntFilter";

export type ReservationWhereInput = {
  commentairesSupplMentaires?: StringNullableFilter;
  conducteurAssign?: ChauffeurWhereUniqueInput;
  id?: StringFilter;
  nombreDePersonnes?: IntNullableFilter;
  nomDuClient?: IntFilter;
  vol?: StringNullableFilter;
};
