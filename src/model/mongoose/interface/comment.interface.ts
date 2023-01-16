import * as mongoose from 'mongoose';
import { IPost } from './post.interface';
import { IUser } from './user.interface';
export interface IComment {
  atPost: IPost;
  commentator: IUser;
  content: string;
  date: Date;
}
