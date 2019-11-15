console.log("Hellow World!");

function buttonClick(){
  console.log("The button was clicked!");
}

var todayFullDate = new Date();

var todayTime = todayFullDate.getTime();
var todayMonth = todayFullDate.getMonth();
var todayDay = todayFullDate.getDay();
var todayDate = todayFullDate.getDate();
var todayHour = todayFullDate.getHours();
var todayYear = todayFullDate.getYear();
var todayFullYear = todayFullDate.getFullYear();

console.log(todayTime);
console.log(todayFullDate);
console.log(todayMonth+1);
console.log(todayDate);
console.log(todayDay);
console.log(todayHour);
console.log(todayYear);
console.log(todayFullYear);

//document.getElementById("theDate").innerHTML = todayDate + "/" + todayMonth + "/" + todayFullYear;
document.getElementById("theDate").innerHTML = 6 + 8 + "five" + String(6) + 8;

//alert("I'm alerting you to danger!");

//confirm("jontron was wrong" + todayDate);

//prompt("gib favourite cookie");

function formOutputs(){
  console.log(document.getElementById("textInput").value);
  console.log(document.getElementById("passInput").value);
}
