W2D1 - TDD with Mocha and Chai
===

Hi crew, thanks for the awesome class this morning. Please find below some notes I took in class (plus Andy's notes - thanks Andy).

[Here's a link to the code we wrote]()
[Video will be here when upload is done](#)

- [x] Intro to testing
- [x] Assertions
- [x] CommonJS Module
- [x] TDD
- [x] npm and Mocha
- [x] Stretch
      + [x] chai assertion
      + [x] node_modules and git

## Intro to testing

### Why do we test our code?
- To ensure code works to requirements
- To make it easy to change

> In Class Demo
> Write a function greet, such that given a name, it greets the name
> E.g greet('Alice') resulted to Hello Alice, welcome to the bootcamp hustle.

#### More requirement
> Business wants ability to test with fname lname


### How did we test?
- Manual testing

- Automated testing
  + Why automated testing?
    - Efficiency for regression
    - Makes it easy to change / refactor
    - Document our code

  + console.log(actual === expected ? 'Passed' : 'Failed')

// method baked in and always available
  + console.assert(actual === expected, failureMessage?) // We care more about failures

// method baked in but have to import when you need it
  + node assert assert(actual, expected) // Stack trace to tell us more about the failure


### Messy, Separate code from test
- Why? long term maintenance / sanity

#### We used CommonJS module
- require
- module.exports / exports


### What to test?
- Context / Expectation
- Input / Output
  + Choose a representative input and test output

- Happy / Unhappy Paths


## TDD - Why?
- Write only the code needed not more
- Blackbox testing
  + Unbiased about implementation of function
- Makes you think about requirements first

## TDD - How?
- **T**est **D**riven **D**evelopment
- Tests are written before the code is written
- We use a process called Red-Green-Refactor
- Red: The test is failing
- Green: The test is passing
- Refactor: Improve the existing code safe in the knowledge that the functionality is testable
- BDD: **B**ehaviour **D**riven **D**evelopment
  - Very similar to TDD, but the focus is more on the end user rather than the quality of the code under test

> Demo
> Write a program to return the number of vowels in a string.

### Tests first
• Valid inputs
  - single word
    - with all vowels input
    - with no vowels input
  - multi words
    - with all vowels input
    - with no vowels input

• Invalid Inputs
  - no word
  - bad words


### TDD with Mocha
- Mocha is a test runner built ontop of node
- By default, mocha looks in the `test` folder for test files to run
- It exposes `describe` and `it` functions

### Chai
- An **assertion** library
- We can use _assertions_ to describe the desired outcome of our code
- Chai offers three different interfaces: `should`, `expect`, and `assert`
- For most uses, choosing which interface to use is a matter of preference

```js
// should
myVar.should.be.a('string');
myVar.should.equal('hello world');

// expect
expect(myVar).to.be.a('string');
expect(myVar).to.equal('hello world');

// assert
assert.typeOf(myVar, 'string');
assert.equal(myVar, 'hello world');
```

### `module.exports` and `require`
- We can export functions, objects, etc from a file using the `module.exports` object
- You can add new keys to the `module.exports` object _or_ you can completely overwrite it with a function/object

```js
// adding new keys to module.exports
module.exports.myFunc = myFunc;
module.exports.myOtherFunc = myOtherFunc;

// overwriting module.exports object
module.exports = myFunc;
// or
module.exports = {
  myFunc,
  myOtherFunc
};
```

- As you have previously seen, we can bring functions, objects, etc into a file using `require`

```js
// basic require syntax
const myFunc = require('./myFunc');

// if the file exports an object, we can use ES6 destructuring
const { myFunc } = require('./myFunc');
```

### Ignoring files/folders
* Sometimes there are files or folders that we do not want git to track for us
* These files might contain sensitive information such as passwords or API keys
* They might also be folders such as `node_modules` which should always be ignored
* We can tell git to ignore certain files/folders by using a special file called `.gitignore` (note the leading period)
* Any files that we specify inside of `.gitignore` will be ignored by git

```
# inside .gitignore
node_modules
my-file.js
```

* Using the above file, the `node_modules` folder and the file `my-file.js` will not be tracked by git

### Useful Links
- [Node Modules](https://nodejs.org/docs/latest/api/modules.html)
- [Node Wrapper Function](https://nodejs.org/api/modules.html#modules_the_module_wrapper)
- [Mocha Docs](https://mochajs.org/)
- [Chai Docs](https://www.chaijs.com/)
- [Chai: Differences between should, expect, and assert](https://www.chaijs.com/guide/styles/#differences)