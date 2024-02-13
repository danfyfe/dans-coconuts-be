import express, { Application } from 'express';
import dotenv from 'dotenv';
import { graphqlHTTP } from "express-graphql";
import { GraphQLError, buildSchema } from 'graphql';
// import Schema from './api/v1/graphql/schemas';
import Root from './api/v1/graphql/resolvers';
import mongoose from 'mongoose';

import PostModel from './api/v1/models/post';

// routes
import postRoute from './api/v1/routes/Post';
import { PostArgs } from './api/v1/interfaces/post';

//For env File 
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8080;


// V1 ****
// // Routes
app.use('/api/v1/post', postRoute);

const Schema = `
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

  input PostInput {
    slug: String!
    title: String!
    content: String!
  }

  input MetaDataInput {
    title: String!
    description: String!
  }


  type RootQuery {
    posts: [Post!]!
  }

  type RootMutation {
    createPost(postInput: PostInput): Post
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
      posts: () => {

      },
      createPost: (args: PostArgs) => {
        const post = new PostModel({
          slug: args.postInput.slug,
          title: args.postInput.title,
          content: args.postInput.content,
          date: new Date()
        });
        return post.save().then((result) => {
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