// let mainEl = document.getElementsByTagName('main');

//easier to work with


//gives an array like object the html collection
// need to index mainEl[]
// we can also use query selector to make it easier so we dont need square brackets;


let mainEl = document.querySelector('main');
console.log(mainEl);

mainEl.style.backgroundColor='var(--main-bg)';

let h1 = document.createElement('h1');
h1.innerText = `DOM Manipulation`;

mainEl.appendChild(h1);

mainEl.classList.add('flex-ctr');
console.log(mainEl);

//Part 2

let topMenuEL = document.getElementById('top-menu');
console.log(topMenuEL);

topMenuEL.style.height = '100%';
topMenuEL.style.backgroundColor = 'var(--top-menu-bg)';
topMenuEL.classList.add('flex-around')

//part 3

var menuLinks = [
  { text: 'about', href: '/about' },
  { text: 'catalog', href: '/catalog' },
  { text: 'orders', href: '/orders' },
  { text: 'account', href: '/account' },
];

menuLinks.forEach((tab)=>{

  let anchor = document.createElement('a');
  anchor.setAttribute('href',`${tab.href}`)
  console.log(anchor);
  anchor.innerText = `${tab.text}`;
  topMenuEL.appendChild(anchor)
});

//part 4
//TBA