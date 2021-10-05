import { PrismaService } from "nestjs-prisma";
import { Prisma, Chauffeur } from "@prisma/client";

export class ChauffeurServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.ChauffeurFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ChauffeurFindManyArgs>
  ): Promise<number> {
    return this.prisma.chauffeur.count(args);
  }

  async findMany<T extends Prisma.ChauffeurFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ChauffeurFindManyArgs>
  ): Promise<Chauffeur[]> {
    return this.prisma.chauffeur.findMany(args);
  }
  async findOne<T extends Prisma.ChauffeurFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ChauffeurFindUniqueArgs>
  ): Promise<Chauffeur | null> {
    return this.prisma.chauffeur.findUnique(args);
  }
  async create<T extends Prisma.ChauffeurCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ChauffeurCreateArgs>
  ): Promise<Chauffeur> {
    return this.prisma.chauffeur.create<T>(args);
  }
  async update<T extends Prisma.ChauffeurUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ChauffeurUpdateArgs>
  ): Promise<Chauffeur> {
    return this.prisma.chauffeur.update<T>(args);
  }
  async delete<T extends Prisma.ChauffeurDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ChauffeurDeleteArgs>
  ): Promise<Chauffeur> {
    return this.prisma.chauffeur.delete(args);
  }

  async findConducteurAssign(
    parentId: string,
    args: Prisma.ChauffeurFindManyArgs
  ): Promise<Chauffeur[]> {
    return this.prisma.chauffeur
      .findUnique({
        where: { id: parentId },
      })
      .conducteurAssign(args);
  }

  async getChauffeur(parentId: string): Promise<Chauffeur | null> {
    return this.prisma.chauffeur
      .findUnique({
        where: { id: parentId },
      })
      .chauffeur();
  }
}
