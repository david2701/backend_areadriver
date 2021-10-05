import { ChauffeurWhereUniqueInput } from "./ChauffeurWhereUniqueInput";

export type ChauffeurUpdateInput = {
  chauffeur?: ChauffeurWhereUniqueInput | null;
  modLeDeVoiture?: string | null;
  nomDuChauffeur?: string;
  plaqueDImmatriculation?: string;
};
