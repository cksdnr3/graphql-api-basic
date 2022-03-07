import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/movie/resolvers";

const server = new GraphQLServer({
  typeDefs: "graphql/movie/schema.graphql",
  resolvers,
});

server.start((options) => {
  console.log(`Express Listening Port ${options.port}`);
});
