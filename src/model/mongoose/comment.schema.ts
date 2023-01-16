import * as mongoose from 'mongoose';
import { IComment } from './interface/comment.interface';
const commentSchema = new mongoose.Schema<IComment>({
  atPost: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post',
  },
  commentator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  content: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
    require: true,
  },
});

const CommentModel = mongoose.model('Comment', commentSchema, 'Comments');
