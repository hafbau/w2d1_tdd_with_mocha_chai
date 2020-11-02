const assert = require('assert');
const countVowels = require('./tdd-vanilla');

// Test 1: Happy Paths
const actualOne = countVowels('aeiou');
const expectedOne = 5;

assert.strictEqual(actualOne, expectedOne)

// Test 2: Happy Paths
const actualTwo = countVowels('lighthouse labs');
const expectedTwo = 5;

assert.strictEqual(actualTwo, expectedTwo);

// Test 3: Happy Paths
const actualThree = countVowels('shh');
const expectedThree = 0;

assert.strictEqual(actualThree, expectedThree);