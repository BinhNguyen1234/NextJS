import * as mongoose from 'mongoose';
import { IUser } from './user.interface';
export interface IPost {
  author: IUser;
  title: string;
  content: string;
  url: string;
  contentString: string;
  date: Date;
  comment: [mongoose.Schema.Types.ObjectId];
}
