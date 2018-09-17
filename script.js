//assigns document body to a var
var body = document.querySelector("body");

//adds HTML to the body and assigns class to second <p>
body.innerHTML = "<p>The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.</p><p class = redText>A Web page is a document. This document can be either displayed in the browser window or as the HTML source. But it is the same document in both cases. The Document Object Model (DOM) represents that same document so it can be manipulated. The DOM is an object-oriented representation of the web page, which can be modified with a scripting language such as JavaScript.”</p>"
;

//makes body purple
body.style.color = "purple";

//makes body background light grey
body.style.background = "lightgrey";

//assigns redText class to variable
var redText = document.querySelector(".redText");

//makes redClass red
redText.style.color = "red";
