// Models
import PostModel from "../models/post";

// Interfaces
import { PostArgs } from "../interfaces/post";
// spread together resolvers for use in app.ts in root
const resolvers = {
  post: () => {
    return [
      { _id: 1, title: 'Hi', slug: 'hi', content: 'hi'}
    ]
  },
  createPost: (args: PostArgs) => {
    const post = new PostModel({
      slug: args.postInput.slug,
      title: args.postInput.title,
      content: args.postInput.content
    })
  }
};

export default resolvers;
