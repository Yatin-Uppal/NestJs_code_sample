export enum statesEnum {
  CREATED = 'CREATED',
  APPROVED = 'APPROVED',
  ACCREDITED = 'ACCREDITED', // Cases where the entity (e.g broker) has to complete the accreditation process
  REJECTED = 'REJECTED',
  SUSPENDED = 'SUSPENDED',
}
export enum adminEntityTypeEnum {
  ADMIN = 'ADMIN',
  TRUSTEE = 'TRUSTEE'
}

export enum LogLevelEnum {
  Debug = 'debug',
  Info = 'info',
  Warning = 'warn',
  Error = 'error'
  // Fatal = 'FATAL'
}
export enum UserActionEnum {
  PageLoad = 'Page Load',
  ButtonClick = 'Button Click',
  HandlerStart = 'Handler Start',
  HandlerEnd = 'Handler End',
  UserValidate = 'User Validate',
  RequestFinish = 'Request Finish',
}