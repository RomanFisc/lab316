// Menu data structure
// var menuLinks = [
//   { text: 'about', href: '/about' },
//   { text: 'catalog', href: '/catalog' },
//   { text: 'orders', href: '/orders' },
//   { text: 'account', href: '/account' },
// ];

var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];

// Part 1

let mainEL = document.querySelector('main');
//Setting background color to main
mainEL.style.backgroundColor = 'var(--main-bg)';

// Creating h1 and adding to main
let header1 = document.createElement('h1');
header1.innerText = "Dom Manipulation";

mainEL.appendChild(header1);

//styling h1 to be center of main
mainEL.classList.add("flex-ctr");

//
//Part 2 - Creating a menu bar
//
let topMenuEl = document.getElementById('top-menu');
topMenuEl.style.height = '100%';
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

// adding a class of flex around
topMenuEl.classList.add('flex-around');

//
// Part 3 adding menu buttons
//
// loop over each item in menulinks 
// add each item to an a element 
// append a elements to topMenuEl

menuLinks.forEach((menuLink) => {
  const button = document.createElement('a');
  button.setAttribute("href", menuLink["href"]);
  button.textContent = menuLink['text'];
  topMenuEl.appendChild(button);
})

// Lab 316.3.1
// Creating submenu 

let subMenuEl = document.getElementById('sub-menu')
subMenuEl.style.height = '100%';
subMenuEl.style.background = 'var(--sub-menu-bg';
subMenuEl.classList.add('flex-around');
subMenuEl.style.position = 'absolute';
subMenuEl.style.top = '0';

// Adding menu interaction
// to add interaction cache all a elements in topmenulinks





let topMenuLinks = topMenuEl.querySelectorAll('a');

topMenuEl.addEventListener("click", menuFunc);

// helper function
function buildSubmenu(subLink) {
  subMenuEl.innerHTML = '';
  subLink.forEach ((link) => {
    const a = document.createElement('a');
    a.href = link.href;
    a.textContent = link.text;
    subMenuEl.appendChild(a);
  })
}


function menuFunc(event) {
  event.preventDefault();
  if (event.target.tagName !== 'A') {
    return;
  }

  topMenuLinks.forEach((link) => {
    link.classList.remove("active");
  });

  if (!event.target.classList.contains("active")) {
    event.target.classList.add("active");

    let subLinks;
    for (let i = 0; i < menuLinks.length; i++) {
      if (menuLinks[i].text === event.target.textContent) {
        subLinks = menuLinks[i].subLinks;
      }
    }

    if (subLinks) {
      subMenuEl.style.top = "100%";
      buildSubmenu(subLinks);
    } else {
      subMenuEl.style.top = "0";
      subMenuEl.innerHTML = '';
    }
  } 
}

// The submenu needs to be dynamic based on the clicked link. To facilitate that, we will create a helper function called buildSubmenu that does the following:
// Clear the current contents of subMenuEl.
// Iterate over the subLinks array, passed as an argument, and for each "link" object:
// Create an <a> element.
// Add an href attribute to the <a>, with the value set by the href property of the "link" object.
// Set the element's content to the value of the text property of the "link" object.
// Append the new element to the subMenuEl.
// Once you have created your helper function, include it in the event listener within the same logic that shows the submenu, remembering to pass the array of sub-links as an argument.


// The menu is almost complete! Now, we need to add interactions to the submenu items themselves:
// Attach a delegated 'click' event listener to subMenuEl.
// The first line of code of the event listener function should call the event object's preventDefault() method.
// The second line of code within the function should immediately return if the element clicked was not an <a> element.
// Log the content of the <a> to verify the handler is working.
// Next, the event listener should set the CSS top property of subMenuEl to 0.
// Remove the active class from each <a> element in topMenuLinks.
// Update the contents of mainEl, within an <h1>, to the contents of the <a> element clicked within subMenuEl.
// If the ABOUT link is clicked, an <h1>About</h1> should be displayed.

subMenuEl.addEventListener('click', subMenuFunc)

function subMenuFunc(event){
  event.preventDefault();
  if (event.target.tagName !== 'A') {
    return
  }
  //console.log(event.target) //working
  subMenuEl.style.top = "0"
  
}