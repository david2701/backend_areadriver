export type ReservationCreateInput = {
  arrivE: string;
  commentairesSupplMentaires?: string | null;
  dPart: string;
  nombreDePersonnes?: number | null;
  nomDuClient: number;
  quand: Date;
  vol?: string | null;
};
