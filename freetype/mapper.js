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