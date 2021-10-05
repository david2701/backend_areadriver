import { ChauffeurWhereUniqueInput } from "./ChauffeurWhereUniqueInput";

export type ChauffeurCreateInput = {
  chauffeur?: ChauffeurWhereUniqueInput | null;
  modLeDeVoiture?: string | null;
  nomDuChauffeur: string;
  plaqueDImmatriculation: string;
};
