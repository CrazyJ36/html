alert("hello world")
// no chars are escaped in javascript. string in quotes
// function to write directly to html document. 

document.write("Using: document.write(this).<p><br></p><br> is NewLine in html js.") //semicolons optional
document.write(5) // write int directly no quotes
document.write(2+2) // arithmetic is processed: + - / *(?) < > ==
document.write(5 > 3) // booleans statements 'questions' return true false

var var1 = "string"
document.write(var1)
	
var par2 = document.getElementById("IdPar").innerHtml()
	
par2.setTextContent(var1)

// get user input with document.getElementById().value
myFunc();
myFunc2("text1")
myFunc2("text2") 
	
function btnFunc() {
    document.write("this is printed from myFunc()")
}

function mFunc2(txt) { // might only be able to use ids
	document.write(txt)
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