const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const seconEl = document.getElementById('secon');




const newYears ='27 May 2024';


function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;


    console.log(days,hours, minutes,seconds);
}
//initial call
countdown();

setInterval(countdown, 1000);