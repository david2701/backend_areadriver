import { ChauffeurWhereUniqueInput } from "../chauffeur/ChauffeurWhereUniqueInput";

export type ReservationCreateInput = {
  arrivE: string;
  commentairesSupplMentaires?: string | null;
  conducteurAssign?: ChauffeurWhereUniqueInput | null;
  dPart: string;
  nombreDePersonnes?: number | null;
  nomDuClient: number;
  quand: Date;
  vol?: string | null;
};
