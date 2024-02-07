// Models
import BlogModel from "../models/blog";

// Interfaces
import { BlogArgs } from "../interfaces/blog";
// spread together resolvers for use in app.ts in root
const resolvers = {
  blogs: () => {
    return [
      { _id: 1, title: 'Hi', slug: 'hi', content: 'hi'}
    ]
  },
  createBlog: (args: BlogArgs) => {
    const blog = new BlogModel({
      slug: args.blogInput.slug,
      title: args.blogInput.title,
      content: args.blogInput.content
    })
  }
};

export default resolvers;
