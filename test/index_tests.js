const request = require('supertest');
const assert = require('assert');

describe('array', () => {
  describe('#indexOf()', () => {
    it('should return -1 when the value is not present', () => {
      assert.equal(-1, [1, 2, 3].indexOf(4));
    });
  });
});

describe('routes', () => {
  let server;

  beforeEach(() => {
    // Clears the cache so a new server instance is used for each test.
    delete require.cache[require.resolve('../index')];
    server = require('../index');
  });

  afterEach(() => {
    server.close();
  });

  // Test to make sure URLs respond correctly.
  it('url /', (done) => {
    request(server)
      .get('/')
      .end((err, res) => {
        assert.equal(res.text, 'Hello World!\n');
        done();
      });
  });
});
