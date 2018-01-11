const app = require('../app');

let request;
let server;

beforeAll(() => {
  server = app.listen(3001);
  request = require('supertest')(server);
});

afterAll(() => {
  server.close();
});

describe('server', () => {

  it('responds to sample response', function () {
    return request.get('/json')
      .expect(200)
      .then(response => {
        expect(response.body.title).toBe('koa2 json');
      });
  });

});
