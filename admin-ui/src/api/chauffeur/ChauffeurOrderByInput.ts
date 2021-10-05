import { SortOrder } from "../../util/SortOrder";

export type ChauffeurOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  modLeDeVoiture?: SortOrder;
  nomDuChauffeur?: SortOrder;
  plaqueDImmatriculation?: SortOrder;
  updatedAt?: SortOrder;
};
