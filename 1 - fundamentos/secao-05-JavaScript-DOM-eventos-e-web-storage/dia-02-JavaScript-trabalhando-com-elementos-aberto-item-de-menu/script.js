const whereIm = document.getElementById('elementoOndeVoceEsta');
const daddyOfMine = whereIm.parentElement;
daddyOfMine.style.color = 'blue';

const firstChildOfChild = document.getElementById('primeiroFilhoDoFilho');
firstChildOfChild.innerHTML = 'Texto teste';

const dad = document.getElementById('pai');
const firstChild = dad.firstElementChild;

console.log(firstChild);
console.log(whereIm.previousElementSibling); 
console.log(whereIm.nextSibling);
console.log(whereIm.nextElementSibling);
console.log(dad.lastElementChild.previousElementSibling);