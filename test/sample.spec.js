const fse = require('fs-extra');
const path = require('path');

describe('server', () => {

  it('returns a single file', () => {

    storeJsonFile('test-resource.json', {example: 'test-resource'});

    return request
      .get('/todos/test-resource')
      .expect(200)
      .then(response => {
        expect(response.body)
          .toHaveProperty('example', 'test-resource')
      })
  });

  function storeJsonFile(fileName, content) {
    fse.outputJsonSync(path.resolve(resourcesDir, fileName), content);
  }

});
