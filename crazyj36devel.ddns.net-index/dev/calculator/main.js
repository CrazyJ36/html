function myAdd() {
  // var input1 wouldn't be available if defined outside of calculate().
  var input1 = parseInt(document.getElementById("input1").value);
  var input2 = parseInt(document.getElementById("input2").value);
  document.getElementById("answer").innerHTML = input1 + input2;
}

function mySubtract() {
  var input1 = parseInt(document.getElementById("input1").value);
  var input2 = parseInt(document.getElementById("input2").value);
  document.getElementById("answer").innerHTML = input1 - input2;
}

function myMultiply() {
  var input1 = parseInt(document.getElementById("input1").value);
  var input2 = parseInt(document.getElementById("input2").value);
  document.getElementById("answer").innerHTML = input1 * input2;
}

function myDivide() {
  var input1 = parseInt(document.getElementById("input1").value);
  var input2 = parseInt(document.getElementById("input2").value);
  document.getElementById("answer").innerHTML = input1 / input2;
}
