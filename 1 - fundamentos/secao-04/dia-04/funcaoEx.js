// let str = 'arara'
function verificaPalindromo (str){
    if (str == str.split('').reverse().join('')){
        return true;
    }else{
        return false;
    }
}

// console.log(verificaPalindromo('arara'))


let arrayTeste = [2, 3, 6, 7, 10, 1]
function maiorIndice(arrayTeste){
    let maiorIndice; 
    let maior = arrayTeste[0]

    for(let index = 0; index<arrayTeste.length; index += 1){
        if(maior < arrayTeste[index]){
            maior = arrayTeste[index]
            maiorIndice = index
        }
    }
    return maiorIndice
}

console.log(maiorIndice(arrayTeste))


let arrayTeste2 = [2, 4, 6, 7, 10, 0, -3];

function menorIndice(arrayTeste){
    let menorIndice; 
    let menor = arrayTeste2[0]

    for(let index = 0; index<arrayTeste.length; index += 1){
        if(menor > arrayTeste[index]){
            menor = arrayTeste[index]
            menorIndice = index
        }
    }
    return menorIndice
}

console.log(menorIndice(arrayTeste2))