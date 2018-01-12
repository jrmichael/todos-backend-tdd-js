const path = require('path');
const fse = require('fs-extra');

module.exports = function (resourcesDir) {
  const router = require('koa-router')();

  router.get('/todos/test-resource', (ctx, next) => {

    return fse.readJson(path.resolve(resourcesDir, 'test-resource.json'))
      .then(content => {
        ctx.body = content;
        next();
      });

  });

  return router;
};
