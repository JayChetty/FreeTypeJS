var assert = require("assert");
var expect = require("chai").expect;
var Mapper = require("../mapper")


it("should be set up with nothing pressed", function(){
  var mapper = new Mapper()
  expect(mapper.keysDown).to.deep.equal([false,false,false,false,false])
});

it("should be able to press keys", function(){
  var mapper = new Mapper()
  mapper.setKeyPressed(0)
  expect(mapper.keysDown).to.deep.equal([true,false,false,false,false])
});

it("should be able to release keys", function(){
  var mapper = new Mapper()
  mapper.setKeyPressed(0)
  mapper.setKeyReleased(0)
  expect(mapper.keysDown).to.deep.equal([false,false,false,false,false])
});

it("current set should depend on set key", function(){
  var mapper = new Mapper()
  mapper.setKeyPressed(0)
  expect(mapper.currentSet).to.equal(1)
});

it("current set should have multiple pressed set key", function(){
  var mapper = new Mapper()
  mapper.setKeyPressed(0)
  mapper.setKeyPressed(1)
  expect(mapper.currentSet).to.equal(1+2)
});


it("current set should release keys", function(){
  var mapper = new Mapper()
  mapper.setKeyPressed(0);
  mapper.setKeyPressed(1);
  mapper.setKeyPressed(2);
  mapper.setKeyPressed(3);
  mapper.setKeyPressed(4);

  mapper.setKeyReleased(3);
  mapper.setKeyReleased(4);
  expect(mapper.currentSet).to.equal(1+2+4)
});

it("should not be able to press key multiple timees", function(){
  var mapper = new Mapper()
  mapper.setKeyPressed(0)
  mapper.setKeyPressed(0)
  expect(mapper.currentSet).to.equal(1)
});

it("should not be able to release key multiple timees", function(){
  var mapper = new Mapper()
  mapper.setKeyPressed(0)
  mapper.setKeyReleased(0)
  mapper.setKeyReleased(0)
  expect(mapper.currentSet).to.equal(0)
});

var testMap = {
  '1':['a','b','c','d','e'],
  '2':['f','g','h','i','j'],
  '4':['k','l','m','n','o'],
  '8':['p','q','r','s','t'],
  '16':['u','v','w','x','y'],
}

it("should be able to take in a map and return the value", function(){
  var mapper = new Mapper(testMap)
  mapper.setKeyPressed(0);
  expect(mapper.triggerKeyPressed(0)).to.equal('a')
});


it("should be able to take in a map for pressed key", function(){
  var mapper = new Mapper(testMap)
  mapper.setKeyPressed(1);
  expect(mapper.triggerKeyPressed(0)).to.equal('f')
});
