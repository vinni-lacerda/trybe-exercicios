const student1 = {
  html: 'Muito Bom',
  css: 'Bom',
  javascript: 'Ótimo',
  softskills: 'Ótimo',
};

const student2 = {
  html: 'Bom',
  css: 'Ótimo',
  javascript: 'Ruim',
  softskills: 'Ótimo',
  git: 'Bom', // chave adicionada
};

// console.log(Object.keys(student1))

const verifica = (student) => {
  const skillsArr = Object.keys(student)
  for(let index = 0; index < skillsArr.length; index += 1) {
    console.log(`${skillsArr[index]}, Nivel: ${student[skillsArr[index]]} `);
  }
}
verifica(student1);
verifica(student2);