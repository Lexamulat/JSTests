var {simple} = require('../index');
var expect = require('chai').expect;

console.log('call2', simple())

describe('#simple()', function() {

      it('should return 0', function() {
        expect(simple()).to.equal('sml21')
      })
    
  })