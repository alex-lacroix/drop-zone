//assign variables to DOM elements
const firstDay = document.querySelector(".days-timer-1");
const secondDay = document.querySelector(".days-timer-2");
const firstHour = document.querySelector(".hours-timer-1");
const secondHour = document.querySelector(".hours-timer-2");
const firstMin = document.querySelector(".mins-timer-1");
const secondMin = document.querySelector(".mins-timer-2");
const firstSec = document.querySelector(".secs-timer-1");
const secondSec = document.querySelector(".secs-timer-2");

//future Leezy launch date in milliseconds
const launchDate = new Date('December 26, 2021 00:00:00').getTime();    

const updateCountdown = () => {
    const currentDate = new Date().getTime();
    const timeRemaining = launchDate - currentDate;

    const day = Math.floor(timeRemaining / (1000 * 60 * 60 * 24)).toString().padStart(2, "0").split("");
    const hour = Math.floor((timeRemaining / (1000 * 60 * 60) % 24)).toString().padStart(2, "0").split("");
    const min = Math.floor((timeRemaining / 1000 / 60) % 60).toString().padStart(2, "0").split("");
    const sec = Math.floor((timeRemaining / 1000) % 60).toString().padStart(2, "0").split("");

    firstDay.innerHTML = day[0];
    secondDay.innerHTML = day[1];
    firstHour.innerHTML = hour[0];
    secondHour.innerHTML = hour[1];    
    firstMin.innerHTML = min[0];
    secondMin.innerHTML = min[1];
    firstSec.innerHTML = sec[0];
    secondSec.innerHTML = sec[1];
}

updateCountdown();

//updates the countdown every second
setInterval(updateCountdown, 1000);
