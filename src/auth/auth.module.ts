import {
  Module
} from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LoginController } from './controller/login.controller';
import { SignUpController } from './controller/signup.controller';
import { LogoutController } from './controller/logout.controller';
import { AuthService } from './service/auth.service';
@Module({
  imports: [],
  controllers: [LoginController, LogoutController, SignUpController],
  providers: [AuthService],
})
export class AuthModule {}
