import { Controller, Post, Res, Req } from '@nestjs/common';
import { AuthService } from '../service/auth.service';
@Controller({
  path: 'signup',
  version: '1',
})
export class SignUpController {
  private authService: AuthService;
  constructor(Service: AuthService) {
    this.authService = Service;
  }
  @Post()
  async handleSignUp(@Req() req, @Res() res) {
    return this.authService
      .SignUp(req.body)
      .then(() => {
        return res.status(201).send('ok');
      })
      .catch((e) => {
        console.log('Error when when sign up auth controller');
        return res.status(491).send("Cann't signup");
      });
  }
}
