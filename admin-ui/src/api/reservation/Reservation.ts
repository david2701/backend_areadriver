import { Chauffeur } from "../chauffeur/Chauffeur";

export type Reservation = {
  arrivE: string;
  commentairesSupplMentaires: string | null;
  conducteurAssign?: Chauffeur | null;
  createdAt: Date;
  dPart: string;
  id: string;
  nombreDePersonnes: number | null;
  nomDuClient: number;
  quand: Date;
  updatedAt: Date;
  vol: string | null;
};
