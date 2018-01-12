const path = require('path');
const resourcesDir = path.resolve(__dirname, 'test', 'resources');
const app = require('./app')(resourcesDir);
Object.defineProperty(window, 'resourcesDir', {value: resourcesDir});

let server;

beforeAll(() => {
  server = app.listen(3001);

  const request = require('supertest')(server);
  Object.defineProperty(window, 'request', {value: request});

});

afterAll(() => {
  server.close();
});
