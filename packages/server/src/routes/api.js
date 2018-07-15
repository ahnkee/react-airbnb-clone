import KoaRouter from 'koa-router';

const router = new KoaRouter({
  prefix: '/api',
});

router.get('/', async ctx => {
  ctx.body = {
    version: 1,
  };
});

export default router;
