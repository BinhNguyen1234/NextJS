import { Injectable, Scope } from '@nestjs/common';
import { UserInfo } from '../dto/info-login.dto';
import UserModel from 'src/model/mongoose/user.schema';
@Injectable({ scope: Scope.REQUEST })
export class AuthService {
  testLogin(Info: UserInfo) {
    console.log(Info);
    return Info;
  }
  async SignUp(User: UserInfo) {
    const InfoSignUp = new UserModel(User);
    return InfoSignUp.save()
      .then((result) => {
        return result;
      })
      .catch((e) => {
        console.log(e.message);
        throw e;
      });
  }
}
