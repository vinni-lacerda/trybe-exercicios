
// let fatorial = 1;

// for(let index = 10; index>0; index -= 1){
//     fatorial = fatorial * index
// }

// console.log(fatorial)


// let word = 'carro';
// let reverseWord = [];

// for (let index = 5; index >= 0; index--) {
//     reverseWord.push(word[index])
// }

// console.log(reverseWord.join(''))

// let array = ['java', 'javascript', 'python', 'html', 'css'];
// let first = array[0];
// let menor = array[0];

// for(let index = 0; index<array.length; index += 1){
//     if(array[index].length > first.length){
//         first = array[index]
//     }
//     if(array[index].length < menor.length){
//         menor = array[index]

//     }
// }
// console.log(first)
// console.log(menor);




// for(let index = 2; index<=50; index += 1){
//     //console.log(index);
//     if(index % 2 !=0 && index % 3 != 0){

//     }
// }


let str = "trybe";
let strStorage = str.split("");
str = "";

console.log(strStorage.length);

for(index = strStorage.length -1; index >= 0; index --){
    str += strStorage[index]
}

console.log(str);