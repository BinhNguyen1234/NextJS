import * as mongoose from 'mongoose';
const userSchenma = new mongoose.Schema({
  username: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require,
  },
  date: { type: Date, require },
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
