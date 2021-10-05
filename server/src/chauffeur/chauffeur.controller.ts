import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ChauffeurService } from "./chauffeur.service";
import { ChauffeurControllerBase } from "./base/chauffeur.controller.base";

@swagger.ApiBasicAuth()
@swagger.ApiTags("chauffeurs")
@common.Controller("chauffeurs")
export class ChauffeurController extends ChauffeurControllerBase {
  constructor(
    protected readonly service: ChauffeurService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
