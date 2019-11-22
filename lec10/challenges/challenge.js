function calc(x){
  var num1 = Number(document.getElementById("input1").value);
  var num2 = Number(document.getElementById("input2").value);
  var calcOutput;
  console.log(num1);
  console.log(x);
  console.log(num2);

  if (x=="+") {
    calcOutput = num1 + num2;
    console.log(calcOutput);
    document.getElementById("output").innerHTML = calcOutput;
  }
  else if (x=="-") {
    calcOutput = num1 - num2;
    console.log(calcOutput);
    document.getElementById("output").innerHTML = calcOutput;
  }
  else if (x=="*") {
    calcOutput = num1 * num2;
    console.log(calcOutput);
    document.getElementById("output").innerHTML = calcOutput;
  }
  else {
    calcOutput = num1 / num2;
    console.log(calcOutput);
    document.getElementById("output").innerHTML = calcOutput;
  }
}
