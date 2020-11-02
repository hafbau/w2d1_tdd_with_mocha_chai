const { expect } = require("chai")
const countVowels = require('./tdd-vanilla');

// const assert= require("assert")
const assert = require("chai").expect
const assert = require("chai").should()
const assert = require("chai").assert

describe('description of the context', () => {

  // test('describes what test should do', () => {})
  it('should work', () => {
    expect(actual).to.equal(expection)
    // actual.should.equal(expected)
    assert.equal(1, '1')
  })
})
