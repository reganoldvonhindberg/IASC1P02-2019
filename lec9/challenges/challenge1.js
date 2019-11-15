//Create button in html that calls stopTime()
//When the page loads, get curent full date information into a variable

var initialTime = new Date();

//stopTime() -> get the current full date information into a *different* varible

function stopTime(){
  var currentTime = new Date();
  console.log(initialTime.getTime());
  console.log(currentTime.getTime());

  //do some math - subtract intialTime from currentTime to get the number of milliseconds the page has been loaded for. Divide by 1000 to get # of seconds

  var timeDifference = (currentTime - initialTime)/1000;
  console.log(timeDifference);

  //Output with a popup

  alert("You have been on the page for: " + timeDifference + " seconds");

}
