const bodyColor = document.getElementById('container');
bodyColor.style.backgroundColor = "white"

const headerContainer = document.getElementById('header-container');
headerContainer.style.backgroundColor = 'rgb(0, 176, 105)'

const emergencyTasks = document.getElementsByClassName('emergency-tasks')[0];
emergencyTasks.style.backgroundColor = 'rgb(255, 159, 132)'

const noEmergencyTasks = document.getElementsByClassName('no-emergency-tasks')[0];
noEmergencyTasks.style.backgroundColor = 'yellow'

const emergencyHeaders = document.getElementsByClassName('emergency-header')[0];
emergencyHeaders.style.backgroundColor = 'purple';

const emergencyHeaders2 = document.getElementsByClassName('emergency-header')[1];
emergencyHeaders2.style.backgroundColor = 'purple';
//---------------------------------------------------------
const noEmergencyHeaders = document.getElementsByClassName('no-emergency-header')[0];
noEmergencyHeaders.style.backgroundColor = 'black';

const noEmergencyHeaders2 = document.getElementsByClassName('no-emergency-header')[1];
noEmergencyHeaders2.style.backgroundColor = 'black';

const footer = document.getElementById('footer-container');
footer.style.backgroundColor = 'rgb(0, 53, 51)'