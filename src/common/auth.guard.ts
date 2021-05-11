import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { IS_PUBLIC_METADATA_KEY } from './is-public.decorator';
// import { Request } from 'express';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    // console.log(context);
    let message = '[AuthGuard] ';

    const isPublic = this.reflector.getAllAndOverride<boolean>(
      IS_PUBLIC_METADATA_KEY,
      [context.getHandler(), context.getClass()],
    );

    message += `[${context.getClass().name} -> ${context.getHandler().name}]`;

    if (isPublic) {
      console.log(`${message} route has been marked with public access ...`);
      return true;
    }

    // TODO: Add logged in user vaidation

    console.log(`${message} denying access ...`);
    // throw new UnauthorizedException();
    return false;
  }
}

/**
 * @description Alias of `AuthGuard`, only available for convenience if you come from `asp.net` background.
 */
export const Authorize = AuthGuard;
