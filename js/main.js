console.log( "main.js" );


let saywhat = document.getElementById('output');
let listItems = document.getElementsByClassName('list-item'); //returns an html collection
// console.log( "listItems", listItems );

function handleClick(MouseEvents) {
	console.log( "MouseEvents", MouseEvents );
	let elementText = MouseEvents.target.innerHTML;
	saywhat.innerHTML = "hmmmmm, clicked " + elementText + ", you have.";
}

for (let i = 0; i < listItems.length; i++) {
	listItems.item(i).addEventListener("click", handleClick);
}

let header = document.getElementById("page-header");

header.addEventListener("mouseover", handleHeaderMouseOver);
header.addEventListener("mouseout", handleHeaderMouseOut);


function handleHeaderMouseOver(event) {
	saywhat.innerHTML = "The force is strong with this one";
}

function handleHeaderMouseOut(event) {
	saywhat.innerHTML = "Remember... the Force will be with you, always"
}

let inputArea = document.getElementById("keypress-input");

inputArea.addEventListener("keyup", function(event){
	console.log("event", event)
	saywhat.innerHTML = event.target.value;
});

let yodaImage = document.getElementById("theYoda");

document.getElementById("change-color")
	.addEventListener("click", function(){
		yodaImage.classList.toggle("flashy")
	});

document.getElementById("force-lots-of")
	.addEventListener("click", function(){
		yodaImage.classList.toggle("moreforce")
	});

document.getElementById("add-border")
	.addEventListener("click", function(){
		yodaImage.classList.toggle("bordered")
	});

/*
  EVENT BUBBLING:

  You can add an event handler on the body tag, and since all
  browser events bubble up to the body, you can then put in
  conditional logic to handle the click event on many different
  elements in one function.
 */

document.getElementById("wrapper").addEventListener("click", function(event){
	console.log("target", event.target);
	console.log( "currentTarget", event.currentTarget );

	if(event.target.tagName.toLowerCase() === "li") {
		console.log( "You have clicked on an <li> element");
	}

	if(event.target.className === "list-item") {
		console.log( "You clicked on a `list-item` element" );
	}

	if(event.target.id === "page-title") {
		console.log( "You clicked on a page-title element");
	}
});

let quotesArray = [
"A long time ago in a galaxy far, far away…",
"Use the force, Luke.",
"The force is strong with this one.",
"Do. Or do not. There is no try.",
"Fear is the path to the dark side.",
"Someday I will be the most powerful Jedi ever.",
"You were the chosen one!"
];
//forEach is a method on array
//it accepts 3 params (object, index, array-value)  => is a way to write function
quotesArray.forEach( (quote, index) => {
	let quoteBlock = `<div id="quote--${index}"
						<h3>"${quote}" - Star Wars</h3>
						</div>`

	let quoteDiv = document.createElement("div");
		quoteDiv.innerHTML = quoteBlock;
		document.getElementById("stickItHere").appendChild(quoteDiv);
		let quoteDom = document.getElementById(`quote--${index}`);
		quoteDom.addEventListener("click", () => {
			console.log( "event", event );
			event.currentTarget.classList.add("accent");
		})

})



















