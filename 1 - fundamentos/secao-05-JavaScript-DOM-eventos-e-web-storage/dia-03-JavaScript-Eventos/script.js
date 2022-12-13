const createDaysOfTheWeek = () => {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  }
  
  createDaysOfTheWeek();

  const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  const daysMonth = () => {
    let days = document.querySelector('#days')
    
    for (let index = 0; index < decemberDaysList.length; index+=1) {
        let li = document.createElement('li')
        li.className = 'day';
        li.innerHTML = decemberDaysList[index]
        days.appendChild(li);
        console.log(li)
    }
    
  }
  daysMonth();
  // Escreva seu código abaixo.
  