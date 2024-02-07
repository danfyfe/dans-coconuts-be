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

const blogSchema = new Schema({
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

const BlogModel = mongoose.model('Blog', blogSchema);

export default BlogModel;
