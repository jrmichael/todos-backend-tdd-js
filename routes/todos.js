const path = require('path');
const fse = require('fs-extra');

module.exports = function (resourcesDir) {
  const router = require('koa-router')();

  router.get('/todos/test-resource.json', async (ctx, next) => {

    ctx.body = await fse.readJson(path.resolve(resourcesDir, 'test-resource.json'))

  });

  return router;
};
