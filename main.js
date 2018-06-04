// You're going to create a simple list of chat messages that you might have with one of your family members. Maybe it's that wacky aunt that you see every Christmas and Fourth of July.

// In your JavaScript, use querySelector() to obtain a reference to that article DOM element.
let messages = document.querySelector("#messages");

//creating a full document fragment for all of this
const fragment = document.createDocumentFragment()

// Create five (5) section elements, each with a class of message, and with textContent of your choosing.


// Create list items for list
const item1 = document.createElement('div')
item1.className = "message"
item1.textContent = "Cousin 1: What are we eating for dinner at Thanksgiving?"
fragment.appendChild(item1);

const item2 = document.createElement('div')
item2.className = "message"
item2.textContent = "Cousin 2: I hope Crazy Aunt Sue isn't coming this year."
fragment.appendChild(item2);


const item3 = document.createElement('div')
item3.className = "message"
item3.textContent = "Cousin 1: All of the cousins should go grab a drink after Thanksgiving dinner, ok?"
fragment.appendChild(item3);


const item4 = document.createElement('div')
item4.className = "message"
item4.textContent = "Cousin 3: Oh no. I heard Crazy Aunt Sue really IS coming."
fragment.appendChild(item4);


const item5 = document.createElement('div')
item5.className = "message"
item5.textContent = "Cousin 2: UGH. She drives me crazy. I really will need that drink. lol"
fragment.appendChild(item5);


// Update your code from the previous exercise to add the chat messages to the messages elements via a document fragment.

/*
    Now I can update my HTML document all at once, with all
    three emperor components rendered. Otherwise, I would
    have needed to add each one, individually - a much more
    "expensive" operation.
*/
document.querySelector("#messages").appendChild(fragment);