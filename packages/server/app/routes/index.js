import Router from 'koa-router';

const router = new Router();
router.prefix('/v1');

router.get('/', async ctx => {
  ctx.body = {
    version: 1,
  };
});

export default router;
