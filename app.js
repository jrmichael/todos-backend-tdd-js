module.exports = function (resourcesDir) {
  console.log(`running with resourcesDir: ${resourcesDir}`);

  const Koa = require('koa');
  const app = new Koa();
  const json = require('koa-json');
  const onerror = require('koa-onerror');
  const bodyparser = require('koa-bodyparser');
  const logger = require('koa-logger');

  const todos = require('./routes/todos')(resourcesDir);

// error handler
  onerror(app);

// middlewares
  app.use(bodyparser({
    enableTypes: ['json']
  }));
  app.use(json());
  app.use(logger());

// logger
  app.use(async (ctx, next) => {
    const start = new Date();
    await next();
    const ms = new Date() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
  });

// routes
  app.use(todos.routes(), todos.allowedMethods());

// error-handling
  app.on('error', (err, ctx) => {
    console.error('server error', err, ctx)
  });

  return app;
};
