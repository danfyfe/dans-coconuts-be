const BlogSchemas = `
  type MetaData {
    _id: ID!
    title: String!
    description: String!
  }

  type Blog {
    _id: ID!
    date: String!
    slug: String!
    title: String!
    content: String!
  }
`;

const BlogInputs = `
  input  BlogInput {
    slug: String!
    title: String!
    content: String!
  }

  input MetaDataInput {
    title: String!
    description: String!
  }
`;

const BlogQueries = `
  blogs: [Blog!]!
`;

const BlogMutations = `
  createBlog(blogInput: BlogInput): Blog
`;


export { 
  BlogSchemas,
  BlogInputs,
  BlogQueries,
  BlogMutations
};
