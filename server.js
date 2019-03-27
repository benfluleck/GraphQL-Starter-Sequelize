const express = require('express');
const { ApolloServer } = require('apollo-server-express');

const typeDefs = require('./schema/typeDefs')
const resolvers = require('./schema/resolvers')
const models = require('./models')


const server = new ApolloServer({ typeDefs, resolvers, context: { models } });

const app = express();
server.applyMiddleware({ app });

models.sequelize.authenticate();
models.sequelize.sync();

app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);