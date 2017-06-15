var chai = require('chai') //it is going to look in the node module or look in the global

var expect = chai.expect; //when you say chai it already invokes
var should = chai.should();

var Human = require('../human.js')
console.log(Human)

describe('Human Class', function (){

  var human = Human;
  var nakaz;

  beforeEach(function (){
    nakaz = new Human('Nakaz') //this is going to put this variable in each functions
  })

  it('should be a function', function (){
    expect(human).to.be.a('function')
  })

  it('should have a property name', function (){
    // var nakaz = new Human('Nakaz')
    expect(nakaz.name).to.equal('Nakaz')
    expect(nakaz.name).to.not.equal('Jason') //you can write something like this to make sure it strickly equals to nakaz only
  })

  it('should have a method sayName', function (){
    // var nakaz = new Human('Nakaz')
    expect(nakaz.sayName).to.be.a('function')
    expect(nakaz.sayName()).to.equal('Nakaz')
  })

})