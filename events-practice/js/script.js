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