import assert from 'assert';
import urlParser from '../parser.js';

describe('URL Format String Parser', function () {
  it('should correctly parse variables and query parameters', function () {
    const urlFormatString = '/:version/api/:collection/:id';
    const urlInstance = '/6/api/listings/3?sort=desc&limit=10';

    const result = urlParser(urlFormatString, urlInstance);

    assert.deepStrictEqual(result, {
      version: '6',
      collection: 'listings',
      id: '3',
      sort: 'desc',
      limit: '10',
    });
  });

  it('should handle different variable names and values', function () {
    const urlFormatString = '/:name/:age';
    const urlInstance = '/John/30?city=NewYork';

    const result = urlParser(urlFormatString, urlInstance);

    assert.deepStrictEqual(result, {
      name: 'John',
      age: '30',
      city: 'NewYork',
    });
  });

  // Add more test cases as needed
});