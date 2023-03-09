const dog = document.getElementById('dog');
const cat = document.getElementById('cat');
const randomBtn = document.getElementById('random');
const img = document.getElementById('img');
const BASE_URL_DOG = fetch(`https://dog.ceo/api/breeds/image/random`);
const BASE_URL_CAT = fetch(`https://aws.random.cat/meow`);

dog.addEventListener('click', ()=>{
  BASE_URL_DOG.then((response) => response.json())
  .then((data) => {
    img.src = data.message;
  })
  console.log('dog')
  console.log(BASE_URL_CAT);
  console.log(BASE_URL_DOG);
});

cat.addEventListener('click', ()=>{
  BASE_URL_CAT.then((response) => response.json())
  .then((data) => {
    img.src = data.file;
  })
  console.log('cat')
});

randomBtn.addEventListener('click', (() =>{
  Promise.any([
    BASE_URL_CAT,
    BASE_URL_DOG
  ])
  .then((response) => response.json())
  .then((data) => {
    img.src = data.file || data.message;
  })
  console.log('surpriseme');
}));