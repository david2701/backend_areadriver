import { Reservation } from "../reservation/Reservation";

export type Chauffeur = {
  createdAt: Date;
  id: string;
  modLeDeVoiture: string | null;
  nomDuChauffeur: string;
  plaqueDImmatriculation: string;
  reservations?: Array<Reservation>;
  updatedAt: Date;
};
