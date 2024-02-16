import mongoose from "mongoose";
import { Schema } from "mongoose";

/**
 *
 * id 
 * slug
 * title
 * content
 * date
 * 
 */

const postSchema = new Schema({
  slug: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  }
});

const PostModel = mongoose.model('Post', postSchema);

export default PostModel;
