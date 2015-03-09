(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/home/jay/Programming/JSProjects/freetypenew/freetype.js":[function(require,module,exports){
var FreetypeKeyboardListener = require('./freetype/freetype_keyboard_listener.js')

window.onload = function(){
  var freeType = new FreetypeKeyboardListener()
}








},{"./freetype/freetype_keyboard_listener.js":"/home/jay/Programming/JSProjects/freetypenew/freetype/freetype_keyboard_listener.js"}],"/home/jay/Programming/JSProjects/freetypenew/freetype/freetype_keyboard_listener.js":[function(require,module,exports){
var Mapper = require('./mapper.js')
var map = require('./freetype_map.js')

var FreetypeKeyboardListener = function(){
  document.onkeydown = this.keyPress.bind(this);
  document.onkeyup = this.keyUp.bind(this)
  this.mapper = new Mapper(map, { backspace: this.backspace.bind(this) })
}

FreetypeKeyboardListener.prototype = {

  setterMap:{
     '86':0,
     '82':1,
     '69':2,
     '87':3,
     '81':4,
   },

  triggerMap:{
     '77':0,
     '73':1,
     '79':2,
     '80':3,
     '219':4,
  },

  addText:function(text){
    this.target.value = this.target.value.concat(text);
  },

  backspace: function(){
    var text = this.target.value ;
    var textin = text.slice(0,-1);
    this.target.value = textin; 
  },

  keyPress: function(e){ 
    e.preventDefault();
    var e = window.event || e;
    this.target = e.target;
    var code = e.keyCode;
    if(this.setterMap[code] != undefined){
      this.mapper.setKeyPressed(this.setterMap[code]);
    } else if(this.triggerMap[code] != undefined) {
      this.addText(this.mapper.triggerKeyPressed(this.triggerMap[code]))
    }
  },

  keyUp: function(e){ 
    e.preventDefault();
    var e = window.event || e;
    this.target = e.target;
    var code = e.keyCode;
    if(this.setterMap[code] != undefined){
      this.mapper.setKeyReleased(this.setterMap[code]);
    }
  }
}

module.exports = FreetypeKeyboardListener

},{"./freetype_map.js":"/home/jay/Programming/JSProjects/freetypenew/freetype/freetype_map.js","./mapper.js":"/home/jay/Programming/JSProjects/freetypenew/freetype/mapper.js"}],"/home/jay/Programming/JSProjects/freetypenew/freetype/freetype_map.js":[function(require,module,exports){
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
