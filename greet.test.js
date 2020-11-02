const assert = require('assert').strict
const greetModule =  require('./greet');
const greet =  require('./greet').greet;

console.log('greet :>> ', greetModule);

const actual = greetModule.greet('Alice', 'Bob');
const expected = 'Hello Alice Bob, welcome to bootcamp hustle.'

const actual = greetModule.greet('Hafiz', 'Bob');
const expected = 'Hello Alice Bob, welcome to bootcamp hustle.'

// console.assert(actual === expected, 'Failed')
assert.equal(actual, expected)

// Test 2
const actualTwo = greetModule.greet('Alice');
const expectedTwo = 'Hello Alice, welcome to bootcamp hustle.'

assert.equal(actualTwo, expectedTwo)

// CommonJS module
// ES6 module