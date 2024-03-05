import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schemas";

// server setup
const server = new ApolloServer({
  typeDefs,
});

const { url } = await startStandaloneServer(server, { listen: "4000" });

console.log("server runing in port", 4000);
