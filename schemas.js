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
  games:[Game],
  authors:[Author]
}
`;
