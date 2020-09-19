import { assert } from 'chai';
import { server, BASE_URL } from './setup';

describe('Hello world test', () => {
  it('gets the hello world page', async () => {
    const res = await server.get(`${BASE_URL}/hello`);
    assert.equal(res.status, 200);
    assert.equal(res.body.message, 'Hello, world!');
  })
})
