import * as mongoose from 'mongoose';
import { IPost } from './interface/post.interface';
const postSchema = new mongoose.Schema<IPost>({
  author: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'User',
  },
  title: {
    type: String,
    require: true,
    index: true,
  },
  content: {
    type: String,
    require: true,
  },
  url: {
    type: String,
    require: true,
    index: true,
  },
  contentString: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
    require: true,
  },
  comment: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment',
    },
  ],
});
const PostModel = mongoose.model('Post', postSchema, 'Posts');
