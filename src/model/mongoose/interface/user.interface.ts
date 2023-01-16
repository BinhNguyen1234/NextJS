import { IsEmail, IsNotEmpty } from 'class-validator';
import * as mongoose from 'mongoose';
export class IUser {
  @IsEmail()
  username: string;
  password: string;
  date?: Date;
  post?: Array<mongoose.Schema.Types.ObjectId>;
  comment?: Array<mongoose.Schema.Types.ObjectId>;
}
