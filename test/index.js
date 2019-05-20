var { simple, compile } = require('../index');
var expect = require('chai').expect;

console.log('call2', simple())

describe('#simple()', function () {

    it('should return 0', function () {
        expect(simple()).to.equal('sml21')
    })

})

describe('#compile()', function () {

    it('should return 0', function () {
        expect(compile('1+(4+9)*-(6+(-1))')).to.equal(-64)
    })

})