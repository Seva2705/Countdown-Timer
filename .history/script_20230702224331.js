const newYears ='1st Jan 2023';


function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const seconds = (newYearsDate - currentDate) * 1000;

    const days = Math.floor(seconds / 3600 / 24);
    const hours = Math.floor(seconds / 3600) % 24;
    const minutes = (Math.floor(seconds / 60) % 24) % 60;

    console.log(days);
}
//initial call
countdown();


setInterval(countdown, 1000);