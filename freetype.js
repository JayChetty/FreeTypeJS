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







