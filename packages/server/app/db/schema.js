import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import queries from '../models/user/queries';
import db from './index';

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQuery',
    fields: queries(db.models),
  }),
});
