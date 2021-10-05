export type Chauffeur = {
  chauffeur?: Chauffeur | null;
  conducteurAssign?: Array<Chauffeur>;
  createdAt: Date;
  id: string;
  modLeDeVoiture: string | null;
  nomDuChauffeur: string;
  plaqueDImmatriculation: string;
  updatedAt: Date;
};
