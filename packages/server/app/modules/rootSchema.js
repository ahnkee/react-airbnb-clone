import fs from 'fs';
import path from 'path';
import {
  addSchemaLevelResolveFunction,
  gql,
  makeExecutableSchema,
  mergeSchemas,
} from 'apollo-server';
import { GraphQLDate, GraphQLTime, GraphQLDateTime } from 'graphql-iso-date';

import db from '../db';

const importAsStr = filePath => fs.readFileSync(filePath, 'utf8');

const customTypesSchema = makeExecutableSchema({
  typeDefs: gql`
    scalar Date
    scalar DateTime
    scalar Time
  `,
  resolvers: {
    Date: GraphQLDate,
    DateTime: GraphQLDateTime,
    Time: GraphQLTime,
  },
});

/**
 * Stitch together app schemas and resolvers
 */
const schemas = fs
  .readdirSync(path.resolve(__dirname))
  .filter(dir => fs.statSync(path.join(__dirname, dir)).isDirectory())
  .reduce(
    (acc, dir) => {
      const schemaPath = path.join(__dirname, dir, 'schema.graphql');
      const resolversPath = path.join(__dirname, dir, 'resolvers.js');

      const typeDefs = fs.existsSync(schemaPath) && importAsStr(schemaPath);
      const resolvers =
        fs.existsSync(resolversPath) && require(resolversPath).default;

      return typeDefs
        ? acc.concat(makeExecutableSchema({ typeDefs, resolvers }))
        : acc;
    },
    [customTypesSchema],
  );

const rootSchema = mergeSchemas({ schemas });

addSchemaLevelResolveFunction(rootSchema, (root, args, context, info) => {
  context.models = db.models;
  context.sequelize = db.sequelize;
});

export default rootSchema;
