import { Injectable, Scope } from '@nestjs/common';
import { UserInfo } from '../dto/info-login.dto';
import { UsePipes,ValidationPipe } from '@nestjs/common';
import { IUser } from 'src/model/mongoose/interface/user.interface';
import UserModel from 'src/model/mongoose/user.schema';
@Injectable({scope: Scope.REQUEST})
export class AuthService {
  testLogin(Info: UserInfo) {
    console.log(Info);
    return Info;
  }
  constructor(){
    console.log("auth service instance init")
  }
  //test
  @UsePipes(ValidationPipe)
  async SignUp(User: UserInfo) {
    console.log(User)
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
