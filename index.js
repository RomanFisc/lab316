// Menu data structure
var menuLinks = [
  { text: 'about', href: '/about' },
  { text: 'catalog', href: '/catalog' },
  { text: 'orders', href: '/orders' },
  { text: 'account', href: '/account' },
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