import express from "express";
import { ApolloServer } from "apollo-server-express";

import typeDefs from "./schemas.js";
import resolvers from "./resolvers.js";

const PORT = 3000;

const app = express();

app.get("/", function(req, res) {
  res.status(200).send("Hello, friend");
});

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({
    request: req
  })
});

apolloServer.applyMiddleware({ app, path: "/api" });

app.listen({ port: PORT }, () =>
  console.log(
    `🚀Server ready at http://localhost:3000${apolloServer.graphqlPath}`
  )
);
