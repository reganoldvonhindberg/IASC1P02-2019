//scripts go here!

document.write("Hello World!");

function changePara(){
  document.getElementById("jsExample").innerHTML = "This is the replaced text";
}

var mathX = 1;
var mathY = 3;
var mathZ;
mathZ = mathX + mathY;

document.write(mathZ);

function argExample(x,y){
  mathZ = x + y;
  document.write(mathZ);
}



function styleSwap(){
document.getElementById("one").style.fontSize = "30px";
document.getElementById("one").style.color = "blue";
document.getElementById("two").style.color = "green";
document.getElementById("two").style.marginLeft = "150px";
document.getElementById("three").style.textTransform = "uppercase";
document.getElementById("three").style.color = "orange";
}

function calcOutputAdd(x,y){
  var result = x + y;
  document.getElementById("output").innerHTML = result ;
}
function calcOutputSub(x,y){
  var result = x - y;
  document.getElementById("output").innerHTML = result ;
}function calcOutputTime(x,y){
  var result = x * y;
  document.getElementById("output").innerHTML = result ;
}function calcOutputDiv(x,y){
  var result = x / y;
  document.getElementById("output").innerHTML = result ;
}
