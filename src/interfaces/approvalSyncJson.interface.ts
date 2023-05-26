import { statesEnum } from "src/common/enums/common.enum";

export interface adminEntity {
  adminEntityId: string;
  firstName: string;
  lastName: string;
  email: string;
  status: statesEnum;
}