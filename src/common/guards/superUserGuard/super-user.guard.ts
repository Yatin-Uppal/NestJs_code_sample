import { CanActivate, ExecutionContext, mixin } from '@nestjs/common';
import { Observable } from 'rxjs';

export const SuperUserGuard: any = () => {
  class SuperUserGuardMixin implements CanActivate {
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
      const request = context.switchToHttp().getRequest();

      if (
        request.headers.super_user_id === process.env.USERS['SUPER_USER_ID'] &&
        request.headers.super_user_client_id === process.env.USERS['SUPER_USER_CLIENT_ID'] &&
        request.headers.super_user_client_secret === process.env.USERS['SUPER_USER_CLIENT_SECRET']
      ) {
        request.user = { userId: process.env.USERS['SUPER_USER_ID'] };
        return true;
      }

      return false;
    }
  }
  const guard = mixin(SuperUserGuardMixin);
  return guard;
}