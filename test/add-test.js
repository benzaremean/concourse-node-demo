const { assert } = require('chai');
const add = require('../maths');

const addition = 1;

describe('tests', () => {
  it('two numbers added', () => {
    const answer = add(1, 1);
    assert.equal(2, answer);
  });
});
