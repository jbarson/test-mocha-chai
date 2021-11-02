const expect = require('chai').expect

const math = require('../math')
// expect(foo).to.be.a('string');
// expect(foo).to.equal('bar');
// expect(foo).to.have.lengthOf(3);
// expect(tea).to.have.property('flavors')
//   .with.lengthOf(3);

//assertStrictEqual(8, math.add(3,5), "does it add?")


describe("math.js", function() {
    it("should return a number", function(){
        expect(math.add(3,5)).to.be.a('number')
    })
    it("adds up to the correct number", function(){
        expect(math.add(3,5)).to.equal(8)
    })
})

