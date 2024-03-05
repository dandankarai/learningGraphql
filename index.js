import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schemas.js";
import db from './_db.js'

const resolvers = {
  Query: {
    games() {
      return db.games
    },
    reviews() {
      return db.reviews
    },
    authors() {
      return db.authors
    }
  }
}

// server setup
const server = new ApolloServer({
  typeDefs,
  resolvers
});

const { url } = await startStandaloneServer(server, { listen: "4000" });

console.log("server runing in port", 4000);


