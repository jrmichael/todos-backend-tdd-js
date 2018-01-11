describe('server', () => {

  it('returns a single file', () => {
    return request
      .get('/todos/test-resource.json')
      .expect(200, {'example': 'test-resource'})
  });

});
