import { buildSchema } from "graphql";
import { BlogSchemas, BlogInputs, BlogQueries, BlogMutations } from "./schemas/blog";

// combine all schemas for use in app.ts in root
const schema = buildSchema(`
  ${BlogSchemas}

  ${BlogInputs}

  type RootQuery {
    ${BlogQueries}
  }

  type RootMutation {
    ${BlogMutations}
  }

  schema {
    query: RootQuery
    mutation: RootMutation
  }
`);

export default schema;
