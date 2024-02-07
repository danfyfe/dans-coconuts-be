import express, { Application } from 'express';
import dotenv from 'dotenv';
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from 'graphql';

// routes
import commentsRoute from './api/v1/routes/Comments';

//For env File 
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8080;

// V1
// // comments
app.use('/api/v1/comments', commentsRoute);



// Global

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Query {
    hello: String
  }
`)

// The root provides a resolver function for each API endpoint
const root = {
  hello: () => {
    return "Hello world!"
  },
}

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
)


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
