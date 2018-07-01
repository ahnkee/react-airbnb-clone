import { GraphQLObjectType, GraphQLNonNull, GraphQLString } from 'graphql';

export default new GraphQLObjectType({
  name: 'User',
  description: 'A user',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The id of the user',
    },
    email: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The email of the user',
    },
    createdAt: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'When user registered',
    },
    updatedAt: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'When user last made changes to account',
    },
  }),
});

// import { attributeFields } from 'graphql-sequelize';
// import { attributes } from './model';

// export default new GraphQLObjectType({
//   name: 'User',
//   description: 'A user',
//   fields: attributeFields(attributes),
// });
