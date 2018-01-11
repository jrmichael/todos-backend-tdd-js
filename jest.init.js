const path = require('path');
const app = require('./app')(path.resolve(__dirname, 'test', 'resources'));

let server;

beforeAll(() => {
  server = app.listen(3001);

  const request = require('supertest')(server);
  Object.defineProperty(window, 'request', {value: request});

});

afterAll(() => {
  server.close();
});
