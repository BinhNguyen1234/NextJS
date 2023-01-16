import * as mongoose from 'mongoose';
import { IUser } from './interface/user.interface';
import { isEmail } from 'class-validator';
const userSchenma = new mongoose.Schema<IUser>({
  username: {
    type: String,
    validate: {
      validator: (e) => isEmail(e),
      message: 'this is must be email address',
    },
    index: true,
    required: [true, 'This Field not allow empty'],
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: { type: Date },
  post: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post',
    },
  ],
  comment: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment',
    },
  ],
});
const UserModel = mongoose.model('User', userSchenma, 'Users');

export default UserModel;
