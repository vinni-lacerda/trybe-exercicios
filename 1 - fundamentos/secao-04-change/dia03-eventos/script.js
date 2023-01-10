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
  
  // Escreva seu código abaixo.
  const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  const daysList = document.getElementById('days')
  for(let index = 0; index<decemberDaysList.length; index+=1){
    let day = decemberDaysList[index];
    let dayListItem = document.createElement('li');
    dayListItem.innerHTML = day;
    daysList.appendChild(dayListItem);
  
    if(day === 24 || day === 31){
        dayListItem.className = 'day holiday';
    } else if(day === 4|| day === 11 || day ===  18){
        dayListItem.className = 'day friday'
    } else if(day === 25){
        dayListItem.className = 'day holiday friday'
    }else{
        dayListItem.className = 'day';
    }
}

const createHolidayBtn = (btnName) => {

    const createBtn = document.createElement('button');
    //let newButton = document.createElement('button');

    createBtn.id = 'btn-holiday';
    createBtn.innerHTML = btnName;
    
    const getBtnContainer = document.querySelector('.buttons-container')
    getBtnContainer.appendChild(createBtn);
} 
createHolidayBtn('Feriados');


const changeBgColor = () =>{
    const getHolidayBtn = document.getElementById('btn-holiday')
    const getHoliday = document.getElementsByClassName('holiday')
    


getHolidayBtn.addEventListener('click', ()=>{
    for(let index = 0; index<getHoliday.length; index += 1){
        getHoliday[index].style.backgroundColor = 'red';
    }
});
}
changeBgColor();

const createAnotherHolidayBtn = (buttonName) => {
    const createFridayBtn = document.createElement('button');
    createFridayBtn.innerHTML = buttonName;
    createFridayBtn.id = 'btn-friday';

    const getBtnContainer = document.querySelector('.buttons-container');
    getBtnContainer.appendChild(createFridayBtn);
}

createAnotherHolidayBtn('Sexta-Feira');

const changeFridayText = () => {
    const getFridayBtn = document.getElementById('btn-friday');
    const getHoliday = document.getElementsByClassName('friday');
    
    getFridayBtn.addEventListener('click', ()=> {
        for (let index = 0; index < getHoliday.length; index+= 1) {
        const holiday = getHoliday[index]
        holiday.innerHTML = 'Sextou!'
    }
    });
}
changeFridayText();


const zoomIn = () =>{
    let days = document.getElementById('days');
    days.addEventListener('mouseover', (event)=>{
        event.target.style.fontSize = '30px'
        event.target.style.fontWeight = '600'
    })
}
zoomIn();

const zoomOut = () =>{
    let days = document.getElementById('days');
    days.addEventListener('mouseout', (event)=>{
        event.target.style.fontSize = '20px';
        event.target.style.fontWeight = '200'
    })
}
zoomOut();

const makeTask = (taskName) =>{
    let task = document.createElement('span');
    task.innerHTML = taskName;
    const taskContainer = document.querySelector('.my-tasks');
    taskContainer.appendChild(task);
}

makeTask('cozinhar');

const makeColorLegend = (color) =>{
    const taskMaker = document.createElement('div');
    taskMaker.className = 'task';
    taskMaker.style.backgroundColor = color;

    const taskContainer = document.querySelector('.my-tasks');
    taskContainer.appendChild(taskMaker);
}

makeColorLegend('red');

const selectTask = () => {
    const getTaskDiv = document.querySelector('.task');
    getTaskDiv.addEventListener('click', ()=>{
        getTaskDiv.className = 'task selected';
    })

}
selectTask();

const changeDayColor = () =>{
    const days = getElementById('days')
    const selectedTask = document.className('task selected');
    const task = document.querySelector('.task');
    // for(let index = 0; index<days.length; index += 1){
    //     console.log(days)
    // }
}

changeDayColor();