import { GraphQLList, GraphQLNonNull, GraphQLString } from 'graphql';
import { resolver } from 'graphql-sequelize';
import userType from './type';

export default ({ User }) => ({
  user: {
    type: userType,
    args: {
      id: {
        description: 'ID of user',
        type: new GraphQLNonNull(GraphQLString),
      },
    },
    resolve: resolver(User, {
      after: result => (result.length ? result[0] : result),
    }),
  },
  users: {
    type: new GraphQLList(userType),
    resolve: resolver(User),
  },
});
