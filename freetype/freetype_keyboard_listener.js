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
