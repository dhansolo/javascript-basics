// Single line JavaScript comment

/* 	
	Multi-line
	Javascript 
	Comment
*/

"use strict"; //Use this while testing

var person = {
	fName: 'David',
	lName: 'Han',
	email: 'dhansolo@uw.edu',
	getFullName: function() { return this.fName + ' ' + this.lName; }
};

// alert(person.getFullName()) - NEVER EVER USE ALERT
console.log('running the getFullName function on person object');
console.log(person.getFullName());

console.log('looping through all properties of the person object');
//Show all properties of the person object
for (var prop in person) {
	console.log(person[prop]); // => value of current property
}

// Create a new img element
var elem = document.createElement('IMG');
elem.src = 'img/dog.jpg';
elem.alt = 'Picture of my dog';

// Add this element to the top of the body
document.body.insertBefore(elem, document.body.firstChild);

// Create a new img element
var kitty = document.createElement('img');
kitty.src = 'img/cat.jpg';
kitty.alt = 'picture of a cool cat';

//Add this to the body of the page
document.body.appendChild(kitty);

