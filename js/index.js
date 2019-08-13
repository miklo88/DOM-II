// ## Task 2: Create Unique Event Listeners

// * [ ] Using your [index.js file](js/index.js), create 10 [unique event listeners](https://developer.mozilla.org/en-US/docs/Web/Events). using your creativity to make the Fun Bus site more interactive.  Here are some unique events you could try to use: 
// 	* [ ] `mouseover`
// 	* [ ] `keydown`
// 	* [ ] `wheel`
// 	* [ ] `drag / drop`
// 	* [ ] `load`
// 	* [ ] `focus`
// 	* [ ] `resize`
// 	* [ ] `scroll`
// 	* [ ] `select`
// 	* [ ] `dblclick`

// Using the 10 unique events, find ways to update the DOM in creative ways. For example you could change colors, animate objects, remove objects, etc.

// * [ ] Nest two similar events somewhere in the site and prevent the event propagation properly
// * [ ] Stop the navigation from items from refreshing the page by using `preventDefault()`
// Your code goes here

// example
// let sampleButton = document.querySelector('.sampleButton');
// sampleButton.addEventListener('click', (event) => {
//   event.target.style.backgroundColor = "#000000
// })

// navigation - 
// let nav = document.querySelectorAll('nav');
// nav.addEventListener('mouseover', (event) => {
//     event.target.style.backgroundColor = "#000000"
// })
// 1 * [ ] `mouseover`
let navContainer = document.querySelector('.nav');
navContainer.addEventListener('mouseover', (event) => {
    event.target.style.color = "red"
})
// let navContainer = document.querySelector('.nav');
// navContainer.addEventListener('mouseleave', (event) => {
//     event.target.style.color = "black"
// })

// 2* [ ] `keydown`
window.addEventListener('keydown', (logKey) => {
    logKey.target.style.color = "green"
})


// 3* [ ] `mouseleave`
let text_content = document.querySelector('.text-content');
text_content.addEventListener('mouseleave', (event) => {
    event.target.style.color = "blue"
})

// 3* [ ] `wheel`
// let contentDestination = document.quereySelector('.content-destination')
// contentDestination.addEventListener('wheel', (zoom) => {
//     zoom.target.style.fontSize = '25px'
// })

// 4* [ ] `dbl click`
let contentPick = document.querySelector('.content-pick');

contentPick.addEventListener('dblclick', (event) => {
    contentPick.classList.toggle('large');
})
// 4* [ ] `drag / drop`

// 5* [ ] `mouseenter`
let contentSection = document.querySelector('.content-section');
contentSection.addEventListener('mouseenter', (event) => {
    event.target.style.backgroundColor = "yellow"
})
// 5* [ ] `load`


// 6* [ ] `context menu`
window.oncontextmenu = (event) => {
    event.preventDefault();
  }
// 6* [ ] `focus`

// 7* [ ] `mousedown`
let logoHeading = document.querySelector('.logo-heading')
logoHeading.addEventListener('mousedown', (event) => {
    event.target.style.color = "orange"
})
// 7* [ ] `resize`


// 8* [ ] `click`
let button = document.querySelector('.btn')
button.addEventListener('click', (event) => {
    event.target.style.backgroundColor = "gray"
})
// 8* [ ] `scroll`

// 9* [ ] `select`
function logSelection(event) {
    const log = document.getElementById('log');
    const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
    log.textContent = `You selected: ${selection}`;
  }
  
  const input = document.querySelector('input');
  input.addEventListener('select', logSelection);
// 9* [ ] `select`

// 10* [ ] `keyup`
// keyup - black
// window.addEventListener('keyup', (logKey) => {
//     logkey.target.style.color = "purple"
// })

const destinationParagraph = document.querySelectorAll('.destination');

document.addEventListener('keyup', logKey);

function logKey(e) {
  log.textContent += ` ${e.code}`;
}



