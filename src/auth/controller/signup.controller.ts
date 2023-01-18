import { Controller, Post, Res, Req, Body } from '@nestjs/common';
import { UserInfo } from '../dto/info-login.dto';
import { AuthService } from '../service/auth.service';
import { UsePipes, ValidationPipe } from '@nestjs/common';
import { Response } from 'express';

@Controller({
  path: 'signup',
  version: '1',
})
export class SignUpController {
  constructor(private authService: AuthService) {
  }
  @Post()
  @UsePipes(ValidationPipe)
  async handleSignUp(@Res() res: Response, @Body() Info: UserInfo) {
    return this.authService
      .SignUp(Info)
      .then(() => {
        return res.status(201).send('ok');
      })
      .catch((e) => {
        console.log('Error when when sign up auth controller');
        return res.status(491).send("Cann't signup");
      });
  }
}
