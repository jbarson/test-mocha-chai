const math = require('./math')

// console.log(math)

function assert(value, message){
    if (!value) throw new Error(message)
}

// assert('', 'the string is empty, you moron')

// assert(1, 'One is truthy')

//assert(console.log('hello'), 'console is undefined')

function assertEqual(valueOne, valueTwo, message) {
    if (valueOne != valueTwo) throw new Error(message)
}

//assertEqual('1', 1, "are they equal?")

function assertStrictEqual(valOne, valTwo, message) {
    if (valOne !== valTwo) throw new Error(message)
  }

//   assertStrictEqual('1', 1, "are they equal?")

// console.log('checking add works', math.add(3, 5))


assertStrictEqual(8, math.add(3,5), "does it add?")

module.exports = {assert, assertEqual, assertStrictEqual }
