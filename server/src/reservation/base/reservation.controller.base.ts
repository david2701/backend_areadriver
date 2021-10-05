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
import { ReservationService } from "../reservation.service";
import { ReservationCreateInput } from "./ReservationCreateInput";
import { ReservationWhereInput } from "./ReservationWhereInput";
import { ReservationWhereUniqueInput } from "./ReservationWhereUniqueInput";
import { ReservationFindManyArgs } from "./ReservationFindManyArgs";
import { ReservationUpdateInput } from "./ReservationUpdateInput";
import { Reservation } from "./Reservation";

export class ReservationControllerBase {
  constructor(
    protected readonly service: ReservationService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Post()
  @nestAccessControl.UseRoles({
    resource: "Reservation",
    action: "create",
    possession: "any",
  })
  @swagger.ApiCreatedResponse({ type: Reservation })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: ReservationCreateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Reservation> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "Reservation",
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
        `providing the properties: ${properties} on ${"Reservation"} creation is forbidden for roles: ${roles}`
      );
    }
    return await this.service.create({
      data: {
        ...data,

        conducteurAssign: data.conducteurAssign
          ? {
              connect: data.conducteurAssign,
            }
          : undefined,
      },
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
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Get()
  @nestAccessControl.UseRoles({
    resource: "Reservation",
    action: "read",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: [Reservation] })
  @swagger.ApiForbiddenResponse()
  @swagger.ApiQuery({
    type: () => ReservationFindManyArgs,
    style: "deepObject",
    explode: true,
  })
  async findMany(
    @common.Req() request: Request,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Reservation[]> {
    const args = plainToClass(ReservationFindManyArgs, request.query);

    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Reservation",
    });
    const results = await this.service.findMany({
      ...args,
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
  @common.Get("/:id")
  @nestAccessControl.UseRoles({
    resource: "Reservation",
    action: "read",
    possession: "own",
  })
  @swagger.ApiOkResponse({ type: Reservation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: ReservationWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Reservation | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Reservation",
    });
    const result = await this.service.findOne({
      where: params,
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
    resource: "Reservation",
    action: "update",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: Reservation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: ReservationWhereUniqueInput,
    @common.Body()
    data: ReservationUpdateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Reservation | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Reservation",
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
        `providing the properties: ${properties} on ${"Reservation"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          conducteurAssign: data.conducteurAssign
            ? {
                connect: data.conducteurAssign,
              }
            : undefined,
        },
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
    resource: "Reservation",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: Reservation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: ReservationWhereUniqueInput
  ): Promise<Reservation | null> {
    try {
      return await this.service.delete({
        where: params,
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
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
