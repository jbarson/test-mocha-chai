const assert = require('../assert')

const {multiply, divide} = require('../moreMath')

//assertStrictEqual(8, math.add(3,5), "does it add?")
// testing multiply

assert.assertStrictEqual(multiply(2, 5), 10, "does it multiply")

