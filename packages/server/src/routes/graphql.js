import KoaRouter from 'koa-router';
import { graphqlKoa, graphiqlKoa } from 'apollo-server-koa';
import rootSchema from '../modules/rootSchema';

const router = new KoaRouter();
const { NODE_ENV } = process.env;

router.get(
  '/graphql',
  graphqlKoa({
    schema: rootSchema,
  }),
);

router.post(
  '/graphql',
  graphqlKoa({
    schema: rootSchema,
  }),
);

if (NODE_ENV === 'development') {
  router.get(
    '/graphiql',
    graphiqlKoa({
      endpointURL: '/graphql',
    }),
  );
}

export default router;
