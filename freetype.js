
var l = 0;
var keysDown = [false,false,false,false,false];

var output = ""
document.onkeydown=function(e){
  e.preventDefault();
  var e = window.event || e;

  console.log('event', e)
  var currentTarget = e.target;
  // var currentTarget = "#target"
  // var currentTarget = document.getElementById("target");
  console.log('currentTarget', currentTarget)

  if (e.keyCode == 86 && keysDown[0]==false)  {l = l + 1; keysDown[0]=true;}
  if (e.keyCode == 82 && keysDown[1]==false)  {l = l + 2; keysDown[1]=true;}
  if (e.keyCode == 69 && keysDown[2]==false)  {l = l + 4; keysDown[2]=true;}
  if (e.keyCode == 87 && keysDown[3]==false)  {l = l + 8; keysDown[3]=true;}
  if (e.keyCode == 81 && keysDown[4]==false)  {l = l + 16;keysDown[4]=true;}

  console.debug("down" + l)

  if (l==0){
    if (e.keyCode==77) {currentTarget.value = currentTarget.value.concat(" ");}
    if (e.keyCode==73) {currentTarget.value = currentTarget.value.concat(".");}
    if (e.keyCode==79) {currentTarget.value = currentTarget.value.concat(",");}
    if (e.keyCode==80) {currentTarget.value = currentTarget.value.concat("'");}  
    if (e.keyCode==219) {var text = currentTarget.value ;
                         var textin = text.slice(0,-1);
                         currentTarget.value = textin;}
  }

if (l==1){
    
  if (e.keyCode==77) {currentTarget.value = currentTarget.value.concat("a");}
  if (e.keyCode==73) {currentTarget.value = currentTarget.value.concat("b");}
  if (e.keyCode==79) {currentTarget.value = currentTarget.value.concat("c");}
  if (e.keyCode==80) {currentTarget.value = currentTarget.value.concat("d");}
  if (e.keyCode==219) {currentTarget.value = currentTarget.value.concat("e");}
  }
  
  if (l==2){
  if (e.keyCode==77) {currentTarget.value = currentTarget.value.concat("f");}
  if (e.keyCode==73) {currentTarget.value = currentTarget.value.concat("g");}
  if (e.keyCode==79) {currentTarget.value = currentTarget.value.concat("h");}
  if (e.keyCode==80) {currentTarget.value = currentTarget.value.concat("i");}
  if (e.keyCode==219) {currentTarget.value = currentTarget.value.concat("j");}
  }
  
  if (l==4){
  if (e.keyCode==77) {currentTarget.value = currentTarget.value.concat("k");}
  if (e.keyCode==73) {currentTarget.value = currentTarget.value.concat("l");}
  if (e.keyCode==79) {currentTarget.value = currentTarget.value.concat("m");}
  if (e.keyCode==80) {currentTarget.value = currentTarget.value.concat("n");}
  if (e.keyCode==219) {currentTarget.value = currentTarget.value.concat("o");}
  }
  
  if (l==8){
  if (e.keyCode==77) {currentTarget.value = currentTarget.value.concat("p");}
  if (e.keyCode==73) {currentTarget.value = currentTarget.value.concat("q");}
  if (e.keyCode==79) {currentTarget.value = currentTarget.value.concat("r");}
  if (e.keyCode==80) {currentTarget.value = currentTarget.value.concat("s");}
  if (e.keyCode==219) {currentTarget.value = currentTarget.value.concat("t");}
  }
  
  if (l==16){
  if (e.keyCode==77) {currentTarget.value = currentTarget.value.concat("u");}
  if (e.keyCode==73) {currentTarget.value = currentTarget.value.concat("v");}
  if (e.keyCode==79) {currentTarget.value = currentTarget.value.concat("w");}
  if (e.keyCode==80) {currentTarget.value = currentTarget.value.concat("x");}
  if (e.keyCode==219) {currentTarget.value = currentTarget.value.concat("y");}
  }

if (l==17){
    
  if (e.keyCode==77) {currentTarget.value = currentTarget.value.concat("A");}
  if (e.keyCode==73) {currentTarget.value = currentTarget.value.concat("B");}
  if (e.keyCode==79) {currentTarget.value = currentTarget.value.concat("C");}
  if (e.keyCode==80) {currentTarget.value = currentTarget.value.concat("D");}
  if (e.keyCode==219) {currentTarget.value = currentTarget.value.concat("E");}
  }

  if (l==18){
  if (e.keyCode==77) {currentTarget.value = currentTarget.value.concat("F");}
  if (e.keyCode==73) {currentTarget.value = currentTarget.value.concat("G");}
  if (e.keyCode==79) {currentTarget.value = currentTarget.value.concat("H");}
  if (e.keyCode==80) {currentTarget.value = currentTarget.value.concat("I");}
  if (e.keyCode==219) {currentTarget.value = currentTarget.value.concat("J");}
  }
  
  if (l==20){
  if (e.keyCode==77) {currentTarget.value = currentTarget.value.concat("K");}
  if (e.keyCode==73) {currentTarget.value = currentTarget.value.concat("L");}
  if (e.keyCode==79) {currentTarget.value = currentTarget.value.concat("M");}
  if (e.keyCode==80) {currentTarget.value = currentTarget.value.concat("N");}
  if (e.keyCode==219) {currentTarget.value = currentTarget.value.concat("O");}
  }
  
  if (l==24){
  if (e.keyCode==77) {currentTarget.value = currentTarget.value.concat("P");}
  if (e.keyCode==73) {currentTarget.value = currentTarget.value.concat("Q");}
  if (e.keyCode==79) {currentTarget.value = currentTarget.value.concat("R");}
  if (e.keyCode==80) {currentTarget.value = currentTarget.value.concat("S");}
  if (e.keyCode==219) {currentTarget.value = currentTarget.value.concat("T");}
  }
  
  if (l==25){
  if (e.keyCode==77) {currentTarget.value = currentTarget.value.concat("U");}
  if (e.keyCode==73) {currentTarget.value = currentTarget.value.concat("V");}
  if (e.keyCode==79) {currentTarget.value = currentTarget.value.concat("W");}
  if (e.keyCode==80) {currentTarget.value = currentTarget.value.concat("X");}
  if (e.keyCode==219) {currentTarget.value = currentTarget.value.concat("Y");}
  }
  
 
  if (l==3){
  if (e.keyCode==77) {currentTarget.value = currentTarget.value.concat("1");}
  if (e.keyCode==73) {currentTarget.value = currentTarget.value.concat("2");}
  if (e.keyCode==79) {currentTarget.value = currentTarget.value.concat("3");}
  if (e.keyCode==80) {currentTarget.value = currentTarget.value.concat("4");}
  if (e.keyCode==219) {currentTarget.value = currentTarget.value.concat("5");}
  }
  
  if (l==5){
  if (e.keyCode==77) {currentTarget.value = currentTarget.value.concat("6");}
  if (e.keyCode==73) {currentTarget.value = currentTarget.value.concat("7");}
  if (e.keyCode==79) {currentTarget.value = currentTarget.value.concat("8");}
  if (e.keyCode==80) {currentTarget.value = currentTarget.value.concat("9");}
  if (e.keyCode==219) {currentTarget.value = currentTarget.value.concat("0");}
  }
  
  if (l==19){
  if (e.keyCode==77) {currentTarget.value = currentTarget.value.concat("£");}
  if (e.keyCode==73) {currentTarget.value = currentTarget.value.concat("&");}
  if (e.keyCode==79) {currentTarget.value = currentTarget.value.concat("@");}
  if (e.keyCode==80) {currentTarget.value = currentTarget.value.concat("Z");}
  if (e.keyCode==219) {currentTarget.value = currentTarget.value.concat("z");}
  }
  
  if (l==21){
  if (e.keyCode==77) {currentTarget.value = currentTarget.value.concat("?");}
  if (e.keyCode==73) {currentTarget.value = currentTarget.value.concat("!");}
  if (e.keyCode==79) {currentTarget.value = currentTarget.value.concat(";");}
  if (e.keyCode==80) {currentTarget.value = currentTarget.value.concat(":");}
  if (e.keyCode==219) {currentTarget.value = currentTarget.value.concat("_");}
  }
  
  if (l==10){
  if (e.keyCode==77) {currentTarget.value = currentTarget.value.concat("z");}
  if (e.keyCode==73) {currentTarget.value = currentTarget.value.concat("{");}
  if (e.keyCode==79) {currentTarget.value = currentTarget.value.concat("}");}
  if (e.keyCode==80) {currentTarget.value = currentTarget.value.concat("(");}
  if (e.keyCode==219) {currentTarget.value = currentTarget.value.concat(")");}
  }


}

document.onkeyup=function(e){
  var e = window.event || e;
  if (e.keyCode ==86)  {l = l-1; keysDown[0]=false; }
  if (e.keyCode ==82)  {l = l-2; keysDown[1]=false; }
  if (e.keyCode ==69)  {l = l-4; keysDown[2]=false; }
  if (e.keyCode ==87)  {l = l-8; keysDown[3]=false; }
  if (e.keyCode ==81)  {l = l-16;keysDown[4]=false; }
  if (l == 0) {null;}
  console.debug("up" + l)
  console.debug(e.keyCode)
}







