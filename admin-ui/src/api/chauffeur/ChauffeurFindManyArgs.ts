import { ChauffeurWhereInput } from "./ChauffeurWhereInput";
import { ChauffeurOrderByInput } from "./ChauffeurOrderByInput";

export type ChauffeurFindManyArgs = {
  where?: ChauffeurWhereInput;
  orderBy?: ChauffeurOrderByInput;
  skip?: number;
  take?: number;
};
