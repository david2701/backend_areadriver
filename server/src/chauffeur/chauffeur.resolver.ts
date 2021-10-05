import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlDefaultAuthGuard from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { ChauffeurResolverBase } from "./base/chauffeur.resolver.base";
import { Chauffeur } from "./base/Chauffeur";
import { ChauffeurService } from "./chauffeur.service";

@graphql.Resolver(() => Chauffeur)
@common.UseGuards(
  gqlDefaultAuthGuard.GqlDefaultAuthGuard,
  gqlACGuard.GqlACGuard
)
export class ChauffeurResolver extends ChauffeurResolverBase {
  constructor(
    protected readonly service: ChauffeurService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
