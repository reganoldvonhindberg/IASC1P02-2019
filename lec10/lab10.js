function theScript(){

var highestNum = Math.max(10.2,4.5,15.6);
var roundedNum = Math.round(highestNum);
var sqNum = Math.sqrt(roundedNum);
console.log(highestNum);
console.log(roundedNum);
console.log(sqNum);

//document.write(highestNum);
//document.write(roundedNum);
//document.write(sqNum);

var randNum = Math.random();
var randOnetoTen = randNum * 10;
var randInt = Math.ceil(randOnetoTen);
console.log(randNum);
console.log(randOnetoTen);
console.log(randInt);

//document.write(randInt); //random number between 0 to 100


for (x=0;x<=5;x++){
  document.write("The for loop has executed "+ Number(x+1)  + " Times! <br/>");
}

for (i=0;i<=10;i++){
  console.log(i);
}


if (randInt > 5){
  document.write("The number " + randInt + " is higher than 5!");
}else if(randInt < 5){
  document.write("The number " + randInt + " is lower than 5!")
}else{
  document.write("The number " + randInt + " is exactly than 5!")
}

var var1 = "one";
var var2 = "one";

if (var1 == var2){
  console.log("TRUE");
}else{
  console.log("FALSE");
}
if (var1 > var2){
  console.log("TRUE");
}else{
  console.log("FALSE");
}if (var1 < var2){
  console.log("TRUE");
}else{
  console.log("FALSE");
}
document.write("<br/>")
setTimeout(repeatScript(), 1000);

}

function repeatScript(){
  setTimeout(repeatScriptTwo, 1000);
}

function repeatScriptTwo(){
  document.write("One Div <br/>");
  setTimeout(repeatScriptThree, 2000);
}

function repeatScriptThree(){
  document.write("Two Div <br/>")
  setTimeout(repeatScript, 1000);
}
