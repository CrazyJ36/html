alert("hello world")
// no chars are escaped in javascript. string in quotes
// function to write directly to html document.

document.write("Using: document.write(this).<p><br></p>is NewLine in html js.") //semicolons optional
document.write(5)<br> // write int directly no quotes
document.write(2+2)<br> // arithmetic is processed: + - / *(?) < > ==
document.write(5 > 3)<br> // booleans statements 'questions' return true false

var var1 = "string"
document.write(var1)<br>

// get user input with document.getElementById().value
myFunc();
myFunc2("text1") // argument/parameter. "text1" is what will replace 'txt'.
myFunc2("text2")

function btnFunc() {
    document.write("myFunc() executed.<br>You typed: ''")
}

function mFunc2(txt) { // might only be able to use ids
        txtNl = str.concat(txt, "<br>")
	document.write(txtNl)
}

// Change Header(h1) Text
var headerText = document.getElementsByTagName('h1')
headerText.onclick = chHeaderText()
function chHeaderText() {
	headerText.textContent = '<h1>clicked';
}

function changeLastParagraph() {
	getElementById(IdPar).textContent = "New text for Last Paragraph."
}
