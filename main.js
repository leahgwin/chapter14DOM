// You're going to create a simple list of chat messages that you might have with one of your family members. Maybe it's that wacky aunt that you see every Christmas and Fourth of July.

// In your JavaScript, use querySelector() to obtain a reference to that article DOM element.
let messages = document.querySelector("#messages");


// Create five (5) section elements, each with a class of message, and with textContent of your choosing.

// Create an unordered list element
const list = document.createElement('ul')

// Create list items for list
const listItem1 = document.createElement('li')
listItem1.className = "message"
listItem1.textContent = "What are we eating for dinner at Thanksgiving?"

const listItem2 = document.createElement('li')
listItem2.className = "message"
listItem2.textContent = "I hope Crazy Aunt Sue isn't coming this year."

const listItem3 = document.createElement('li')
listItem3.className = "message"
listItem3.textContent = "All of the cousins should go grab a drink after Thanksgiving dinner, ok?"

const listItem4 = document.createElement('li')
listItem4.className = "message"
listItem4.textContent = "Oh no. I heard Crazy Aunt Sue really IS coming."

const listItem5 = document.createElement('li')
listItem5.className = "message"
listItem5.textContent = "UGH. She drives me crazy. I really will need that drink. lol"


// Using appendChild(), attach each message as a child to the messages element.
list.appendChild(listItem1);
list.appendChild(listItem2);
list.appendChild(listItem3);
list.appendChild(listItem4);
list.appendChild(listItem5);


//console logging to check if it worked
console.log(list)
