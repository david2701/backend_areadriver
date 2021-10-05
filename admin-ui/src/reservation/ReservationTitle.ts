import { Reservation as TReservation } from "../api/reservation/Reservation";

export const RESERVATION_TITLE_FIELD = "vol";

export const ReservationTitle = (record: TReservation): string => {
  return record.vol || record.id;
};
