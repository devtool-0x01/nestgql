import {
  BadRequestException,
  Body,
  Controller,
  Get,
  NotImplementedException,
  Post,
  Session,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
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
