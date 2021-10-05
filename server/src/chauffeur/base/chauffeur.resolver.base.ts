import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import * as gqlDefaultAuthGuard from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import * as gqlUserRoles from "../../auth/gqlUserRoles.decorator";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { CreateChauffeurArgs } from "./CreateChauffeurArgs";
import { UpdateChauffeurArgs } from "./UpdateChauffeurArgs";
import { DeleteChauffeurArgs } from "./DeleteChauffeurArgs";
import { ChauffeurFindManyArgs } from "./ChauffeurFindManyArgs";
import { ChauffeurFindUniqueArgs } from "./ChauffeurFindUniqueArgs";
import { Chauffeur } from "./Chauffeur";
import { ChauffeurService } from "../chauffeur.service";

@graphql.Resolver(() => Chauffeur)
@common.UseGuards(
  gqlDefaultAuthGuard.GqlDefaultAuthGuard,
  gqlACGuard.GqlACGuard
)
export class ChauffeurResolverBase {
  constructor(
    protected readonly service: ChauffeurService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Chauffeur",
    action: "read",
    possession: "any",
  })
  async _chauffeurAssignMeta(
    @graphql.Args() args: ChauffeurFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @graphql.Query(() => [Chauffeur])
  @nestAccessControl.UseRoles({
    resource: "Chauffeur",
    action: "read",
    possession: "any",
  })
  async chauffeurAssign(
    @graphql.Args() args: ChauffeurFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Chauffeur[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Chauffeur",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => Chauffeur, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Chauffeur",
    action: "read",
    possession: "own",
  })
  async chauffeur(
    @graphql.Args() args: ChauffeurFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Chauffeur | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Chauffeur",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => Chauffeur)
  @nestAccessControl.UseRoles({
    resource: "Chauffeur",
    action: "create",
    possession: "any",
  })
  async createChauffeur(
    @graphql.Args() args: CreateChauffeurArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Chauffeur> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "Chauffeur",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"Chauffeur"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        chauffeur: args.data.chauffeur
          ? {
              connect: args.data.chauffeur,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Chauffeur)
  @nestAccessControl.UseRoles({
    resource: "Chauffeur",
    action: "update",
    possession: "any",
  })
  async updateChauffeur(
    @graphql.Args() args: UpdateChauffeurArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Chauffeur | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Chauffeur",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"Chauffeur"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      // @ts-ignore
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          chauffeur: args.data.chauffeur
            ? {
                connect: args.data.chauffeur,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Chauffeur)
  @nestAccessControl.UseRoles({
    resource: "Chauffeur",
    action: "delete",
    possession: "any",
  })
  async deleteChauffeur(
    @graphql.Args() args: DeleteChauffeurArgs
  ): Promise<Chauffeur | null> {
    try {
      // @ts-ignore
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Chauffeur])
  @nestAccessControl.UseRoles({
    resource: "Chauffeur",
    action: "read",
    possession: "any",
  })
  async conducteurAssign(
    @graphql.Parent() parent: Chauffeur,
    @graphql.Args() args: ChauffeurFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Chauffeur[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Chauffeur",
    });
    const results = await this.service.findConducteurAssign(parent.id, args);

    if (!results) {
      return [];
    }

    return results.map((result) => permission.filter(result));
  }

  @graphql.ResolveField(() => Chauffeur, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Chauffeur",
    action: "read",
    possession: "any",
  })
  async chauffeur(
    @graphql.Parent() parent: Chauffeur,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Chauffeur | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Chauffeur",
    });
    const result = await this.service.getChauffeur(parent.id);

    if (!result) {
      return null;
    }
    return permission.filter(result);
  }
}
