let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let maior = 0;
let impares = 0;
// let contador = 0;

// for(let i=0; i<numbers.length; i++){
//     console.log(numbers[i])
//      sum += numbers[i];
//      media = sum/numbers.length

// }
// if(media > 20){
//     console.log('Valor maior que 20')
// }else{
//     console.log('Valor menor ou igual a 20')
// }
// console.log(sum)
// console.log(media)

for (let i = 0; i<numbers.length; i++){
    if(maior<numbers[i]){
        maior = numbers[i]
    }    

}
console.log(maior);

for (let i = 0; i<numbers.length; i++){
    if(numbers[i] % 2 != 0 ){
        impares++
    }    

 }  
 console.log(`Numero de impares: ${impares}`)

if(impares == 0){
    console.log('Nenhum valor impar encontrado')
}
