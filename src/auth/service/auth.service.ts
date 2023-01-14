import { Injectable } from '@nestjs/common';
import { UserInfo } from '../dto/info-login.dto';
import UserModel from 'src/model/mongoose/user.schema';
@Injectable()
export class AuthService {
  testLogin(Info: UserInfo) {
    console.log(Info);
    return Info;
  }
  //test
  async SignUp(User: UserInfo) {
    const InfoSignUp = new UserModel(User);
    return InfoSignUp.save()
      .then((result) => {
        return result;
      })
      .catch((e) => {
        console.log(e);
        throw e;
      });
  }
}
