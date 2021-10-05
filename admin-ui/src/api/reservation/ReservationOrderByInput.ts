import { SortOrder } from "../../util/SortOrder";

export type ReservationOrderByInput = {
  arrivE?: SortOrder;
  commentairesSupplMentaires?: SortOrder;
  createdAt?: SortOrder;
  dPart?: SortOrder;
  id?: SortOrder;
  nombreDePersonnes?: SortOrder;
  nomDuClient?: SortOrder;
  quand?: SortOrder;
  updatedAt?: SortOrder;
  vol?: SortOrder;
};
