import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { IntFilter } from "../../util/IntFilter";

export type ReservationWhereInput = {
  commentairesSupplMentaires?: StringNullableFilter;
  id?: StringFilter;
  nombreDePersonnes?: IntNullableFilter;
  nomDuClient?: IntFilter;
  vol?: StringNullableFilter;
};
