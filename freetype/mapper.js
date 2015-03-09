var Mapper = function(map){
  this.keysDown = [false,false,false,false,false];
  this.map = map;
  this.currentSet = 0
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
    return this.map[this.currentSet][keyNum];
  }
}

module.exports = Mapper;