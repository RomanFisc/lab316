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

function menuFunc(event) {
  event.preventDefault();
  if (event.target.tagName !== 'A') {
    return
  }
  // get all a within function
  // go through and remove active from each link
  // create conditional statement
  // if the a doesnt have active class 
  // add active class

  let topMenuLinks = topMenuEl.querySelectorAll('a');
  topMenuLinks.forEach((link) => {
    link.classList.remove("active")
  });

  if (!event.target.classList.contains("active")) {
    event.target.classList.add("active");
  }

  console.log(event.target.innerText)
  //within smae menu we want to toggle submenu between active and nonactive states
};

//
//Adding submenu interaction: 


