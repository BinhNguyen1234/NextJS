import { Body } from '@nestjs/common';
import { Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserInfo } from '../dto/info-login.dto';
import { AuthService } from '../service/auth.service';

@Controller({
  path: 'login',
  version: '1',
})
@UsePipes(ValidationPipe)
export class LoginController {
  private authService: AuthService;
  constructor(authService: AuthService) {
    this.authService = authService;
  }
  @Post()
  checkroute(@Body() Info: UserInfo) {
    return this.authService.testLogin(Info);
  }
}
