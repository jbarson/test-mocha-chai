const expect = require('chai').expect

const repeatNumbers = require('../repeatNumbers')

//  Create a function named repeatNumbers that will return a string (or null if no values passed) with each of the given values repeated the appropriate number of times, if there are multiple sets of values each set should be separated by a comma. If there is only one set of values then you should omit the comma.

describe('repeatNumbers', () => {
    it('will return null if no arguments passed', () => {
        expect(repeatNumbers()).to.equal(null)
    })
    it('outputs a string, if passed an argument', () => {
        expect(repeatNumbers([[1, 3]])).to.be.a('string')
    })
    it('will return "111" when passed [[1,3]]', () => {
        expect(repeatNumbers([[1, 3]])).to.equal("111")
    })
    it("will return 111, 2 when given [[1, 3], [2, 1]]", function () {
        expect(repeatNumbers([[1, 3], [2, 1]])).to.equal("111, 2")
    })
})
