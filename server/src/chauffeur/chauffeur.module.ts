import { Module } from "@nestjs/common";
import { ChauffeurModuleBase } from "./base/chauffeur.module.base";
import { ChauffeurService } from "./chauffeur.service";
import { ChauffeurController } from "./chauffeur.controller";
import { ChauffeurResolver } from "./chauffeur.resolver";

@Module({
  imports: [ChauffeurModuleBase],
  controllers: [ChauffeurController],
  providers: [ChauffeurService, ChauffeurResolver],
  exports: [ChauffeurService],
})
export class ChauffeurModule {}
