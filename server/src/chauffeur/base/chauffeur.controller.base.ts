import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestMorgan from "nest-morgan";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ChauffeurService } from "../chauffeur.service";
import { ChauffeurCreateInput } from "./ChauffeurCreateInput";
import { ChauffeurWhereInput } from "./ChauffeurWhereInput";
import { ChauffeurWhereUniqueInput } from "./ChauffeurWhereUniqueInput";
import { ChauffeurFindManyArgs } from "./ChauffeurFindManyArgs";
import { ChauffeurUpdateInput } from "./ChauffeurUpdateInput";
import { Chauffeur } from "./Chauffeur";
import { ReservationWhereInput } from "../../reservation/base/ReservationWhereInput";
import { Reservation } from "../../reservation/base/Reservation";

export class ChauffeurControllerBase {
  constructor(
    protected readonly service: ChauffeurService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Post()
  @nestAccessControl.UseRoles({
    resource: "Chauffeur",
    action: "create",
    possession: "any",
  })
  @swagger.ApiCreatedResponse({ type: Chauffeur })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: ChauffeurCreateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Chauffeur> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "Chauffeur",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new errors.ForbiddenException(
        `providing the properties: ${properties} on ${"Chauffeur"} creation is forbidden for roles: ${roles}`
      );
    }
    return await this.service.create({
      data: data,
      select: {
        createdAt: true,
        id: true,
        modLeDeVoiture: true,
        nomDuChauffeur: true,
        plaqueDImmatriculation: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Get()
  @nestAccessControl.UseRoles({
    resource: "Chauffeur",
    action: "read",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: [Chauffeur] })
  @swagger.ApiForbiddenResponse()
  @swagger.ApiQuery({
    type: () => ChauffeurFindManyArgs,
    style: "deepObject",
    explode: true,
  })
  async findMany(
    @common.Req() request: Request,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Chauffeur[]> {
    const args = plainToClass(ChauffeurFindManyArgs, request.query);

    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Chauffeur",
    });
    const results = await this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        id: true,
        modLeDeVoiture: true,
        nomDuChauffeur: true,
        plaqueDImmatriculation: true,
        updatedAt: true,
      },
    });
    return results.map((result) => permission.filter(result));
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Get("/:id")
  @nestAccessControl.UseRoles({
    resource: "Chauffeur",
    action: "read",
    possession: "own",
  })
  @swagger.ApiOkResponse({ type: Chauffeur })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: ChauffeurWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Chauffeur | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Chauffeur",
    });
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        id: true,
        modLeDeVoiture: true,
        nomDuChauffeur: true,
        plaqueDImmatriculation: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return permission.filter(result);
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Patch("/:id")
  @nestAccessControl.UseRoles({
    resource: "Chauffeur",
    action: "update",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: Chauffeur })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: ChauffeurWhereUniqueInput,
    @common.Body()
    data: ChauffeurUpdateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Chauffeur | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Chauffeur",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new errors.ForbiddenException(
        `providing the properties: ${properties} on ${"Chauffeur"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          modLeDeVoiture: true,
          nomDuChauffeur: true,
          plaqueDImmatriculation: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Delete("/:id")
  @nestAccessControl.UseRoles({
    resource: "Chauffeur",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: Chauffeur })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: ChauffeurWhereUniqueInput
  ): Promise<Chauffeur | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          id: true,
          modLeDeVoiture: true,
          nomDuChauffeur: true,
          plaqueDImmatriculation: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Get("/:id/reservations")
  @nestAccessControl.UseRoles({
    resource: "Chauffeur",
    action: "read",
    possession: "any",
  })
  @swagger.ApiQuery({
    type: () => ReservationWhereInput,
    style: "deepObject",
    explode: true,
  })
  async findManyReservations(
    @common.Req() request: Request,
    @common.Param() params: ChauffeurWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Reservation[]> {
    const query: ReservationWhereInput = request.query;
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Reservation",
    });
    const results = await this.service.findReservations(params.id, {
      where: query,
      select: {
        arrivE: true,
        commentairesSupplMentaires: true,

        conducteurAssign: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        dPart: true,
        id: true,
        nombreDePersonnes: true,
        nomDuClient: true,
        quand: true,
        updatedAt: true,
        vol: true,
      },
    });
    return results.map((result) => permission.filter(result));
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Post("/:id/reservations")
  @nestAccessControl.UseRoles({
    resource: "Chauffeur",
    action: "update",
    possession: "any",
  })
  async createReservations(
    @common.Param() params: ChauffeurWhereUniqueInput,
    @common.Body() body: ChauffeurWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      reservations: {
        connect: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Chauffeur",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"Chauffeur"} is forbidden for roles: ${roles}`
      );
    }
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Patch("/:id/reservations")
  @nestAccessControl.UseRoles({
    resource: "Chauffeur",
    action: "update",
    possession: "any",
  })
  async updateReservations(
    @common.Param() params: ChauffeurWhereUniqueInput,
    @common.Body() body: ChauffeurWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      reservations: {
        set: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Chauffeur",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"Chauffeur"} is forbidden for roles: ${roles}`
      );
    }
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Delete("/:id/reservations")
  @nestAccessControl.UseRoles({
    resource: "Chauffeur",
    action: "update",
    possession: "any",
  })
  async deleteReservations(
    @common.Param() params: ChauffeurWhereUniqueInput,
    @common.Body() body: ChauffeurWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      reservations: {
        disconnect: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Chauffeur",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"Chauffeur"} is forbidden for roles: ${roles}`
      );
    }
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}
