W2D1 - TDD with Mocha and Chai
===

- [ ] Intro to testing
- [ ] Assertions
- [ ] CommonJS Module
- [ ] TDD
- [ ] npm and Mocha
- [ ] Stretch
      + [ ] chai assertion
      + [ ] node_modules and git

## Intro to testing

### Why do we test our code?
- To ensure code works to requirements
- To make it easy to change

> In Class Quiz
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
    - Document code

  + console.log(actual === expected ? 'Passed' : 'Failed')

// method baked in and always available
  + console.assert(actual, expected, message?) // We care more about failures

// method baked in but have to import when you need it
  + node assert assert(actual, expected) // Stack trace to tell more about the failure


### Messy, Separate code from test
- Why? long term maintenance / sanity

- require
- module.exports / exports


### What to test?
- Context / Expectation
- Input / Output
  + Choose a representative input and test output

- Happy / Unhappy Paths

# B R E A K

## TDD - Why?
- Write only the code needed not more
- Blackbox testing
  + Unbiased about implementation of function
- Makes you think about requirements first

## TDD - How?
**RED => GREEN => REFACTOR**

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

#### Other stuff
- Chai / more options
- .gitignore
