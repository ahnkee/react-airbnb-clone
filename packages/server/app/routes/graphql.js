import KoaRouter from 'koa-router';
import { graphqlKoa, graphiqlKoa } from 'apollo-server-koa';
import schema from '../db/schema';

const router = new KoaRouter();
const { NODE_ENV } = process.env;

router.get(
  '/graphql',
  graphqlKoa({
    schema,
  }),
);

router.post(
  '/graphql',
  graphqlKoa({
    schema,
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
