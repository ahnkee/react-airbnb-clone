import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import cors from '@koa/cors';
import helmet from 'koa-helmet';
import logger from 'koa-logger';

const app = new Koa();

app.use(helmet());

if (process.env.NODE_ENV === 'development') {
  app.use(logger());
}

app.use(cors());
app.use(
  bodyParser({
    enableTypes: ['json'],
    jsonLimit: '3mb',
    strict: true,
    onerror: function(err, ctx) {
      ctx.throw('body parse error', 422);
    },
  }),
);

export default app;
