(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/home/jay/Programming/JSProjects/freetypenew/freetype.js":[function(require,module,exports){
var Mapper = require('./freetype/mapper.js')
var map = require('./freetype/freetype_map.js')

var helper = {
  addText:function(text){
    this.target.value = this.target.value.concat(text);
  },

  backspace: function(){
    var text = this.target.value ;
    var textin = text.slice(0,-1);
    this.target.value = textin; 
  }
}


var mapper = new Mapper(map, { backspace: helper.backspace.bind(helper) })

document.onkeydown=function(e){
  e.preventDefault();
  var e = window.event || e;
  // var currentTarget = e.target;
  helper.target = e.target;

  if (e.keyCode == 86 )  {mapper.setKeyPressed(0);}
  if (e.keyCode == 82 )  {mapper.setKeyPressed(1);}
  if (e.keyCode == 69 )  {mapper.setKeyPressed(2);}
  if (e.keyCode == 87 )  {mapper.setKeyPressed(3);}
  if (e.keyCode == 81 )  {mapper.setKeyPressed(4);}

  if (e.keyCode==77) {helper.addText(mapper.triggerKeyPressed(0));}
  if (e.keyCode==73) {helper.addText(mapper.triggerKeyPressed(1));}
  if (e.keyCode==79) {helper.addText(mapper.triggerKeyPressed(2));}
  if (e.keyCode==80) {helper.addText(mapper.triggerKeyPressed(3));}
  if (e.keyCode==219){helper.addText(mapper.triggerKeyPressed(4));}
}

document.onkeyup=function(e){
  var e = window.event || e;
  if (e.keyCode == 86 )  {mapper.setKeyReleased(0);}
  if (e.keyCode == 82 )  {mapper.setKeyReleased(1);}
  if (e.keyCode == 69 )  {mapper.setKeyReleased(2);}
  if (e.keyCode == 87 )  {mapper.setKeyReleased(3);}
  if (e.keyCode == 81 )  {mapper.setKeyReleased(4);}
}








},{"./freetype/freetype_map.js":"/home/jay/Programming/JSProjects/freetypenew/freetype/freetype_map.js","./freetype/mapper.js":"/home/jay/Programming/JSProjects/freetypenew/freetype/mapper.js"}],"/home/jay/Programming/JSProjects/freetypenew/freetype/freetype_map.js":[function(require,module,exports){
module.exports = {
  '0':[' ',':','\'','(','backspace'],
  '1':['a','b','c','d','e'],
  '2':['f','g','h','i','j'],
  '4':['k','l','m','n','o'],
  '8':['p','q','r','s','t'],
  '16':['u','v','w','x','y'],
}
},{}],"/home/jay/Programming/JSProjects/freetypenew/freetype/mapper.js":[function(require,module,exports){
var Mapper = function(map, callbacks){
  this.keysDown = [false,false,false,false,false];
  this.map = map;
  this.currentSet = 0;
  this.callbacks = callbacks;
}

Mapper.prototype = {

  setKeyPressed: function(keyNum){
    if(!this.keysDown[keyNum]){
      this.keysDown[keyNum] = true;
      this.currentSet += Math.pow(2,keyNum);
    }
  },
  setKeyReleased: function(keyNum){
    if(this.keysDown[keyNum]){
      this.keysDown[keyNum] = false;
      this.currentSet -= Math.pow(2,keyNum);
    }
  },
  triggerKeyPressed:function(keyNum){
    if(!this.map || !this.map[this.currentSet]){
      return "";
    }
    returnValue = this.map[this.currentSet][keyNum];
    if(returnValue === "backspace"){
      this.callbacks["backspace"]();
      return "";
    } else{
      return returnValue;
    }
  }
}

module.exports = Mapper;
},{}]},{},["/home/jay/Programming/JSProjects/freetypenew/freetype.js"]);
