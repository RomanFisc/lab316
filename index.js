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

