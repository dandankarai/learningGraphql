// In Graphql exist 5 typeDefs (int, float, string, boolean, ID)

// To do a field required use !, some like id:ID!
export const typeDefs = `#graphql
type Game {
  id:ID!,
  title:String!,
  platform:[String!]!,
}

type Review {
  id:ID!,
  rating:Int!,
  content:String!
}

type Author {
  id: ID!,
  name:String!,
  verified: Boolean!
}

type Query {
  reviews: [Review],
  review(id:ID!): Review       #------> Search for a unique id, passing props ID.
  games:[Game],
  game(id:ID!): Game           #------> Search for a unique id, passing props ID.
  authors:[Author]
  author(id:ID!): author       #------> Search for a unique id, passing props ID.
}
`;
