// function imprimeIdade() {
//     for (let idade = 30; idade <= 40; idade += 1) {
//       console.log('Idade dentro do for:', idade)
//     }
//     // console.log('Idade fora do for:', idade) // retire essa linha ao implementar o tipo de variável correta.
//   }
//   imprimeIdade()


  // Executando esse código iremos receber um erro `TypeError: Assignment to constant variable.`
  const pessoa = {
    nome: 'Henri',
    idade: 20
  }

  //   pessoa = {
      //     nome: 'Luna',
      //     idade: 19
      //   } // Altere essa estrutura para corrigir o erro.

    pessoa.nome = 'Luna';    
    pessoa.idade = 19;
  console.log('Nome:', pessoa.nome);
  console.log('Idade:', pessoa.idade);