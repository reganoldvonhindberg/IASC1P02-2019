function formOutputs(){
  console.log(document.getElementById("textInput").value);
  console.log(document.getElementById("passInput").value);
  alert("I'm alerting you to the fact that you're trying to login, you don't wanna do that. How about you just go back to the home page and not try this again?");
  document.getElementById("enterButton").style.marginLeft = "500px";
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

function moveButton(){
  document.getElementById("enterButton").style.marginLeft = "-100px";
}
