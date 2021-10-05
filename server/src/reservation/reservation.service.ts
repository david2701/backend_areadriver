import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { ReservationServiceBase } from "./base/reservation.service.base";

@Injectable()
export class ReservationService extends ReservationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
