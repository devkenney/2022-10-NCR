const button = document.querySelector('button')
// Selects the button element from the HTML (line 19) and sets it to a variable
const input = document.querySelector('input')
// Selects the input element from the HTML (line 18) and sets it to a variable
button.addEventListener('click', (event) => {
  // Listens for a click event on the button we selected above
  const newLi = document.createElement('li')
  // When the button is clicked, creates a new li element and sets it to a variable. At this point, the li is ONLY in memory, not on the page
  newLi.textContent = input.value
  // Sets the text content of the new li we created to the value of the input that we selected above
  document.querySelector('ul').appendChild(newLi)
  // finally adds the li we created to the page inside of the ul element (line 15 - 17)
})
// ---------------
// Event delegation time!
// ---------------

const ul = document.querySelector('ul')
// Selects the ul element from the HTML (lines 15 - 17)
const handleClick = (event) => {
  // creates a new function to be used with an event listener later on
  event.target.style.color = 'red'
  // sets the target of the event's text color to red when clicked
}
ul.addEventListener('click', handleClick)
// adds an event listener of the 'click' type to the ul we selected above, using the handleClick function we defined above

// ul.removeEventListener('click', handleClick)
// removes the event listener of the click type called 'handleClick' from the ul element that we selected above

// change for testing commits