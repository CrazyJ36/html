//semicolons optional in javascript/html/chrome


/*var headerTxt = document.querySelector('h1');

querySelector() returns the first Element within the document that matches the specified selector
var btn = document.querySelector('button');

btn.onclick = function() {
	headerTxt.textContent = 'Button clicked';
}*/

// Basic web dialog:
 alert("hello world")

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

function chText() {
	idpar = document.getElementById("idPar")
    idpar.innerHTML =  "New text for Last Paragraph."
}

// TODO:
// get user input with document.getElementById().value

