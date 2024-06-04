

let mainEL = document.querySelector('main');
mainEL.style.backgroundColor = 'var(--main-bg)';

let header1 = document.createElement('h1');
header1.innerText = "Dom Manipulation";

mainEL.appendChild(header1);
