// Write a function greet, such that given a name, it greets the name
// E.g greet('Alice') resulted to Hello Alice, welcome to the bootcamp hustle.
const greet = function (name, lname) {
  if (lname) {
    return `Hello ${name} ${lname}, welcome to bootcamp hustle.`
  } else {
    return `Hello ${name}, welcome to bootcamp hustle.`
  }
}


// const module = {}
// module.exports = {}
// const exports = module.exports
exports.greet = greet;

exports.WHY_ARE_WE_HERE = 'just to suffer'

module.exports = {
  greet: greet,
  WHY_ARE_WE_HERE: 'say somfn cool'
}

// I replaced
// module.exports = eqArrays
// with 
// exports.eqArrays = eqArrays
// and it stopped working 
// saying eqArrays is not a function..
// why is that?

const equalArray = function () {}

module.exports = {
  eqArrays: eqArrays
}