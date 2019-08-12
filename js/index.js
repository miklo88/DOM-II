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
// navContainer.addEventListener('mouseleave', (event) => {
//     event.target.style.color = "black"
// })

// 2 * [ ] `keydown`
window.addEventListener('keydown', (logKey) => {
    logKey.target.style.color = "green"
})
// keyup - black
// window.addEventListener('keyup', (logKey) => {
//     logkey.target.style.color = "black"
// })

// 3 * [ ] `wheel`
// window.addEventListener('wheel', (zoom) => {
    
// })





