import { Chauffeur as TChauffeur } from "../api/chauffeur/Chauffeur";

export const CHAUFFEUR_TITLE_FIELD = "modLeDeVoiture";

export const ChauffeurTitle = (record: TChauffeur): string => {
  return record.modLeDeVoiture || record.id;
};
