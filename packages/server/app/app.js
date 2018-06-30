import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import cors from '@koa/cors';
import helmet from 'koa-helmet';
import logger from 'koa-morgan';

import db from './db';
import router from './routes';
import { requestId } from './middlewares';

const app = new Koa();
app.context.sequelize = db.sequelize;
app.context.models = db.models;

app.use(helmet());

app.use(
  bodyParser({
    enableTypes: ['json'],
    jsonLimit: '5mb',
    strict: true,
    onerror: function(err, ctx) {
      ctx.throw('body parse error', 422);
    },
  }),
);

app.use(requestId());

app.use(
  cors({
    origin: '*',
    allowMethods: ['GET', 'HEAD', 'PUT', 'POST', 'DELETE', 'PATCH'],
    exposeHeaders: ['X-Request-Id'],
  }),
);

app.use(
  logger('dev', {
    skip: () => app.env === 'test',
  }),
);

app.use(router.routes());
app.use(router.allowedMethods());

export default app;
