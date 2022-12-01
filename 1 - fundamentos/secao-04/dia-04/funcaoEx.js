// let str = 'arara'
// function verificaPalindromo (str){
//     if (str == str.split('').reverse().join('')){
//         return true;
//     }else{
//         return false;
//     }
// }

// // console.log(verificaPalindromo('arara'))


// let arrayTeste = [2, 3, 6, 7, 10, 1]
// function maiorIndice(arrayTeste){
//     let maiorIndice; 
//     let maior = arrayTeste[0]

//     for(let index = 0; index<arrayTeste.length; index += 1){
//         if(maior < arrayTeste[index]){
//             maior = arrayTeste[index]
//             maiorIndice = index
//         }
//     }
//     return maiorIndice
// }

// console.log(maiorIndice(arrayTeste))


// let arrayTeste2 = [2, 4, 6, 7, 10, 0, -3];

// function menorIndice(arrayTeste){
//     let menorIndice; 
//     let menor = arrayTeste2[0]

//     for(let index = 0; index<arrayTeste.length; index += 1){
//         if(menor > arrayTeste[index]){
//             menor = arrayTeste[index]
//             menorIndice = index
//         }
//     }
//     return menorIndice
// }

// console.log(menorIndice(arrayTeste2))



// let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']

// function biggestName(nomes){
//     let firstName = nomes[0]

//     for (let index = 0; index < nomes.length; index++) {

//         if(nomes[index].length > firstName.length){
//             firstName = nomes[index]
//        }
//     }

//     return firstName

// }

// console.log(biggestName(nomes))

// let arrayInteiro = [2, 3, 2, 5, 8, 2, 3];

// let count = 0;
// function mostRepeat (arrayInteiro){
//     for(let index = 0; index < arrayInteiro; index += 1){
       
//         for(let secondIndex = 0; secondIndex<arrayInteiro.length; secondIndex += 1){
//             if(arrayInteiro[index] == arrayInteiro[secondIndex]){
//                 count++
//             }
//         }
//     }
//     return count
// };


// console.log(mostRepeat(arrayInteiro))


function totalSum (n){
    let sum = 0;

    for (let index = 1; index <= n; index += 1) {
        //console.log(index)
         sum += index
    }
    return sum
}

console.log(totalSum(5));