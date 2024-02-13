const PostSchemas = `
  type MetaData {
    _id: ID!
    title: String!
    description: String!
  }

  type Post {
    _id: ID!
    date: String!
    slug: String!
    title: String!
    content: String!
  }
`;

const PostInputs = `
  input  PostInput {
    slug: String!
    title: String!
    content: String!
  }

  input MetaDataInput {
    title: String!
    description: String!
  }
`;

const PostQueries = `
  posts: [Post!]!
`;

const PostMutations = `
  createPost(postInput: PostInput): Post
`;


export { 
  PostSchemas,
  PostInputs,
  PostQueries,
  PostMutations
};
