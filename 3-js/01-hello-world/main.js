// we declare a variable using the var keyword
// myHeading will have a reference to h1 (the first h1)
var myHeading = document.querySelector('h1');
// we set the text content of h1 as 'Hello world! Welcome to JS'
myHeading.textContent = 'Hello world! Welcome to JS';

var myDiv = document.querySelector('div');
// we can also set the html content using innerHtml
myDiv.innerHTML = '<p style="color: red;">Welcome to JavaScript</p>';

// we declare another variable called myBtn
// myBtn will have a reference to button element
var myBtn = document.querySelector('button');
// we are going to add an event handler
// onclick is the event and to that we are assigning an anonymous function
// every time you click the button, this function will be called
// and it will show an alert box with 'Hello World'
myBtn.onclick = function(){
    alert("Hello World!");
}