import { gql } from "apollo-server-express";

const settingsTypeDefs = gql`
  type Query {
    setting(id: Int!): Setting
    settings(name: String): [Setting!]!
  }
  type Setting {
    id: ID!
    name: String
    users: [User]!
  }
  type User {
    id: ID!
    name: String
    email: String
  }
`;

module.exports = settingsTypeDefs;
