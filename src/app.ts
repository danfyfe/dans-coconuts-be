import express, { Application } from 'express';
import dotenv from 'dotenv';
import { graphqlHTTP } from "express-graphql";
import { GraphQLError, buildSchema } from 'graphql';
// import Schema from './api/v1/graphql/schemas';
import Root from './api/v1/graphql/resolvers';
import mongoose from 'mongoose';

import BlogModel from './api/v1/models/blog';

// routes
import blogRoute from './api/v1/routes/Blog';
import { BlogArgs } from './api/v1/interfaces/blog';

//For env File 
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8080;


// V1 ****
// // Routes
app.use('/api/v1/blog', blogRoute);

const Schema = `
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

  input BlogInput {
    slug: String!
    title: String!
    content: String!
  }

  input MetaDataInput {
    title: String!
    description: String!
  }


  type RootQuery {
    blogs: [Blog!]!
  }

  type RootMutation {
    createBlog(blogInput: BlogInput): Blog
  }

  schema {
    query: RootQuery
    mutation: RootMutation
  }
`

// // GraphQL
app.use(
  "/graphql",
  graphqlHTTP({
    schema:  buildSchema(Schema),
    rootValue: {
      blogs: () => {

      },
      createBlog: (args: BlogArgs) => {
        const blog = new BlogModel({
          slug: args.blogInput.slug,
          title: args.blogInput.title,
          content: args.blogInput.content,
          date: new Date()
        });
        return blog.save().then((result) => {
          console.log(result);
          return result;
        }).catch((error) => {
          console.log(error);
          throw new Error(error);
        })
      }
    },
    graphiql: true,
    formatError(err): GraphQLError {
      console.log(err)
      return err;
    }
  })
)

// Middlewares
app.use(express.json());

// DB connection
mongoose.connect(
  `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.3y6led3.mongodb.net/?retryWrites=true&w=majority`
  ).then(() => {
    console.log('Successfully connected to db.')
    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
    });
  }).catch((error) => {
    console.log(error)
  });

// V1 ****