import KoaRouter from 'koa-router';

const router = new KoaRouter();
router.prefix('/v1');

router.get('/', async ctx => {
  ctx.body = {
    version: 1,
  };
});

export default router;
