const { assert } = require('chai');
const add = require('../maths');
//comment

describe('tests', () => {
  it('two numbers added', () => {
    const answer = add(1, 1);
    assert.equal(2, answer);
  });

  it('two numbers added again', () => {
    const answer = add(5, 1);
    assert.equal(6, answer);
  });

  it('two numbers added again and again', () => {
    const answer = add(5, 5);
    assert.equal(10, answer);
  });
});

