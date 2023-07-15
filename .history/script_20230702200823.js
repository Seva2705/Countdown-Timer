const newYears ='1st Jan 2023';


function countdown() {
    const newYearsDate = new Date(newYears)
    const currentDate = new Date();

    const seconds = (newYearDate - currentDate)

    console.log(newYearDate - currentDate);
}

countdown();