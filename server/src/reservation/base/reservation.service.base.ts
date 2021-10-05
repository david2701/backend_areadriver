import { PrismaService } from "nestjs-prisma";
import { Prisma, Reservation, Chauffeur } from "@prisma/client";

export class ReservationServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.ReservationFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReservationFindManyArgs>
  ): Promise<number> {
    return this.prisma.reservation.count(args);
  }

  async findMany<T extends Prisma.ReservationFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReservationFindManyArgs>
  ): Promise<Reservation[]> {
    return this.prisma.reservation.findMany(args);
  }
  async findOne<T extends Prisma.ReservationFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReservationFindUniqueArgs>
  ): Promise<Reservation | null> {
    return this.prisma.reservation.findUnique(args);
  }
  async create<T extends Prisma.ReservationCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReservationCreateArgs>
  ): Promise<Reservation> {
    return this.prisma.reservation.create<T>(args);
  }
  async update<T extends Prisma.ReservationUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReservationUpdateArgs>
  ): Promise<Reservation> {
    return this.prisma.reservation.update<T>(args);
  }
  async delete<T extends Prisma.ReservationDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReservationDeleteArgs>
  ): Promise<Reservation> {
    return this.prisma.reservation.delete(args);
  }

  async getConducteurAssign(parentId: string): Promise<Chauffeur | null> {
    return this.prisma.reservation
      .findUnique({
        where: { id: parentId },
      })
      .conducteurAssign();
  }
}
