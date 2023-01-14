import { IsEmail, IsNotEmpty } from 'class-validator';
export class UserInfo {
  @IsEmail()
  @IsNotEmpty()
  username: string;
  @IsNotEmpty()
  password: string;
}
