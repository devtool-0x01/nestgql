import {
  BadRequestException,
  Body,
  Controller,
  Get,
  NotImplementedException,
  Post,
  Req,
  Session,
  UseGuards,
} from '@nestjs/common';
import { ThrottlerGuard } from '@nestjs/throttler';
import { Request as ExpressRequest } from 'express';
import { Session as ExpressSession } from 'express-session';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseGuards(ThrottlerGuard)
  getHello(@Session() session: Record<string, any>): string {
    session.visits = session.visits ? session.visits + 1 : 1;
    // req.session.visits = req.session.visits ? req.session.visits + 1 : 1;
    return `${this.appService.getHello()} - ${session.id} ${JSON.stringify(
      session,
    )}`;
  }

  @Post('login')
  async login(@Body() loginInput: AuthInput, @Session() session) {
    console.log(loginInput);
    throw new NotImplementedException();

    // const user = await this.appService.getUserByEmail(loginInput.email);
    // if (!user) {
    //   throw new BadRequestException({
    //     message: 'invalid login credentials',
    //   });
    // }

    // console.log(session);
    // session.user = user.email;
    // return true;
  }

  @Post('register')
  async register(@Body() registerInput: AuthInput) {
    return this.appService.registerUser(
      registerInput.email,
      registerInput.password,
    );
  }
}

export type AuthInput = { email: string; password: string };
