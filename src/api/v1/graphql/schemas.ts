import { buildSchema } from "graphql";
import { PostSchemas, PostInputs, PostQueries, PostMutations } from "./schemas/post";

// combine all schemas for use in app.ts in root
const schema = buildSchema(`
  ${PostSchemas}

  ${PostInputs}

  type RootQuery {
    ${PostQueries}
  }

  type RootMutation {
    ${PostMutations}
  }

  schema {
    query: RootQuery
    mutation: RootMutation
  }
`);

export default schema;
