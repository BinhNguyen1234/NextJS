import * as mongoose from 'mongoose';
const postSchema = new mongoose.Schema({
  author: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'User',
  },
  title: {
    type: String,
    require: true,
    unique: true,
  },
  content: {
    type: String,
    require: true,
  },
  url: {
    type: String,
    require: true,
    unique: true,
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
