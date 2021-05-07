//semicolons optional in javascript/html/chrome

var headerTxt = document.querySelector('h1');

headerTxt.onclick = function() {
	headerTxt.textContent = 'header 1 clicked';
}

// Write directly to html document using same html text tags:
document.write("Using: document.write(this) <br>")

document.write("Concat" + " text<br>") // concatenate like java

// Shows how to use an int together with string in one .write().
// Also, <br> may be used in line of string .write("text <br>"), as:
// document.write(1 + "<br>"). There are no data type conflicts.
// Operator precedence like-formulas are used to get obvious result.
document.write("An int: " + 5 + "<br>") // write int directly no quotes

// Here ("string", arithmetic + "string") notice the comma is needed
// because were not concatenating 2+2 with "string" + "string".
// we want to print ("string", then-do-math + "string)
document.write("2 plus 2 is: ", 2+2 + "<br>") // arithmetic is processed: + - / *(?) < > ==

// Booleans statements like this return and print true or false.
document.write(5 > 3 + "<br>")

// If else
if ("hello" == "Hello") {
  document.write(" hello is the same as Hello" + "<br>")
} else {
  document.write(" hello is not the same as Hello" + "<br>")
}

// Variable
var myNum = 6
document.write(myNum)

// function called from html button onclick=""
// button that changes paragraph text.
// querySelector() returns the first Element within the document that matches the specified tag name.
// eg. if your document has only one <button>, you could use querySelector('button').
// I gave my desired button A name <
// not needed as onclick is set, but to use btn in code:
// var btn = document.querySelector(tag'button', or name'btn1');
function chText() {
	idpar = document.getElementById("idPar")
    idpar.innerHTML =  "New text for Last Paragraph."
}

// Basic web dialog:
function my_alert() {
  // Alert button id 'idBtn2'
  alert("Alert popup showing!")

  // A method to change the button text
  var btn_txt = document.createTextNode(' was shown');
  document.getElementById('idBtn2').appendChild(btn_txt);
}

// TODO:
// get user input with document.getElementById().value
// Opens file in new browser window: window.open("file://C:/xampp/htdocs/emails.txt");

