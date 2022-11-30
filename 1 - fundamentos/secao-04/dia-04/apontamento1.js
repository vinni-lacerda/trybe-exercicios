let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 };

let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: medals
}

// console.log(`A jogadora ${player.name +' '+ player.lastName} tem ${player.age} anos de idade`)

player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018]
// console.log(player);

// console.log(`A jogadora ${player.name + ' ' + player.lastName} foi eleita a melhor do mundo por 6 vezes ${player['bestInTheWorld']}`);

console.log(`A jogadora poussi ${player.medals.golden} medalhas de ouro e ${player.medals.silver} medalhas de prata`)