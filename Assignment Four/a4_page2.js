function theScript(){

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

setTimeout(writeTime(), 1000);
function writeTime(){
  document.getElementById("Time").innerHTML = todayFullDate;
}
}
function changeText1() {
  document.getElementById("footerText2").innerHTML = "About Us";
}
function changeText2() {
  document.getElementById("footerText3").innerHTML = "About Us";
}
function changeText3() {
  document.getElementById("footerText4").innerHTML = "About Us";
}
