// To select an element based on its id you use document.getElementById('id-name')

let titleEl = document.getElementById('title')
// correlates to line 12 in the html

// -------------------------

// To select an element that does *not* have an id, you use document.querySelector('selector')

// 'selector' above can be anything you can use in a stylesheet. This can be classes, ids, normal elements, etc.

// If you are selecting something that matches more than one thing in your HTML, it only registers the first one in the file.

let pEl = document.querySelector('.cool');
console.dir(pEl);
// correlates to line 13 in the HTML

// -------------------------

// to change the text inside of an element that *has already been selected* you use textContent.

// textContent can both add text where there was none, and replace text that was already there.

pEl.textContent = "hello there -- GENERAL KENOBI"

// REAL WORLD EXAMPLE:
// let's say you are making a to do list application. You might use this if you wanted to edit one of your to-dos. Another reason this might be used is to edit a comment or post on a social media site.

// -------------------------

// to change the style of any element *that has already been selected*, you use style.property.

pEl.style.color = 'purple'
// changes the text color to purple

pEl.style.textAlign = 'center'
// changes the alignment to center

// note that instead of kebob case like in CSS (text-align) we use camel case in JavaScript (textAlign)

// REAL WORLD EXAMPLE:
// You might see this used on a site that has both a light theme and a dark theme. This might be used to change the background color from black to white or vice-versa. (This can also be done with classes but this is an example)
// This might also be used to change the color of a button when you hover over it or something similar.

// -------------------------

// to manipulate the classes in any element that has already been selected, you can use a few things.

pEl.classList.add('bold')
// adds a class to an element

// REAL WORLD EXAMPLE:
// This might be used if you want to add a class to a newly created to-do in your todo list.

pEl.classList.toggle('cool')
pEl.classList.toggle('cool')
// if the class already exists on the element, it gets rid of it. If the class doesn't exist on the element, it adds it.

// REAL WORLD EXAMPLE:
// toggle is used when you want to be able to turn some sort of style on and off. SO, in the above example when I mentioned light and dark theme, you can toggle some classes on and off when you want to switch themes, so you can do a lot of CSS stuff at once.

console.log(pEl.classList.contains('yellow'))
// The contains property returns true if the class exists on the element, and false if it does not exist.

// contains can check if a class exists, SO this can be used to check if the page is in dark mode or light mode, based on what class exists on an element.

pEl.classList.replace('bold', 'yellow')
// replace 'replaces' one class on the element with another class. This one replaces bold with yellow.

//REAL WORLD EXAMPLE:
// In certain circumstances you might for example replace a class of 'light' with a class of 'dark' instead of toggling them on and off, but this isn't common.

// pEl.classList.add('blue')

// -------------------------

let aEl = document.querySelector('a');
// correlates to line 21 in the HTML

// setAttribute is very powerful and can be used for many things. for example: Can be used to set classes on an element, can be used to set href, src, ids, etc.

aEl.setAttribute('href', 'http://www.google.com')
// this sets the href (hypertext reference) or target of the link

const imgEl = document.querySelector('img')
// correlates to line 22 in the HTML

imgEl.setAttribute('src', 'https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg')
// adds the src attribute to the img tag that didn't have one.

//REAL WORLD EXAMPLE:
// setAttribute might be used if you want to keep a picture in the same place, but change what picture it is. for example, on a social media site, if you wanted to change your profile picture. It stays in the same place on the page, but the picture itself changes.

// -------------------------

// To select multiple elements at the same time, you use document.querySelectorAll('selector').

const liEls = document.querySelectorAll('.comment')
// correlates to lines 17 through 19 in the HTML

console.log(liEls)

for(let commentEl of liEls) {
  commentEl.style.fontSize = '30px'
}

// looping over a node list (array of elements basically) can be used when you want to apply the same style to a whole bunch of different elements. It can also be used with any of the above methods to create unique results. You can set the attribute of all of them, change their classes, set their style, etc.
