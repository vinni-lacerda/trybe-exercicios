
const dad = document.getElementById('pai');
const makeBrother = document.createElement('section');
makeBrother.id = 'IrmaoElementoOndeVoceEsta';
dad.appendChild(makeBrother);

const whereIm = document.getElementById('elementoOndeVoceEsta');
const makeChild = document.createElement('section');
makeChild.id = 'filhoElementoOndeVoceEsta';
whereIm.appendChild(makeChild);

const firstChildOfChild = document.getElementById('primeiroFilhoDoFilho');
const makeChildOfChild = document.createElement('section');
makeChildOfChild.id = 'filhoPrimeirofilhoDoFilho';
firstChildOfChild.appendChild(makeChildOfChild);



const terceiroFilho = makeChildOfChild
      .parentElement // primeiroFilhoDoFilho
      .parentElement // elementoOndeVoceEsta
      .nextElementSibling; // terceiroFilho
    console.log(terceiroFilho);