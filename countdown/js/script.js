const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];
const startDate = document.querySelector(".start-date");
const timingArea = document.querySelector(".timing-area");
const time = document.querySelectorAll(".time h2");

// months are ZERO index based;

let presentDate = new Date();
let presentYear = presentDate.getFullYear();
let presentMonth = presentDate.getMonth();
let presentDay = presentDate.getDate();

// let futureDate = new Date(2020, 3, 24, 11, 30, 0);
const futureDate = new Date(presentYear, presentMonth, presentDay + 10, 10, 00, 0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
let month = futureDate.getMonth();

month = months[month];
const weekday = weekdays[futureDate.getDay()];
const date = futureDate.getDate();
startDate.textContent = `CodePlay starts on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`;

const futureTime = futureDate.getTime();
function getRemaindingTime() {
    const today = new Date().getTime();

    const t = futureTime - today;
    // 1s = 1000ms
    // 1m = 60s
    // 1hr = 60m
    // 1d = 24hr
    // values in miliseconds
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;
    // calculate all values
    let days = t / oneDay;
    days = Math.floor(days);
    let hours = Math.floor((t % oneDay) / oneHour);
    let minutes = Math.floor((t % oneHour) / oneMinute);
    let seconds = Math.floor((t % oneMinute) / 1000);

    // set values array
    const values = [days, hours, minutes, seconds];
    function format(item) {
        if (item < 10) {
        return (item = `0${item}`);
        }
        return item;
    }

    time.forEach(function (item, index) {
        item.innerHTML = format(values[index]);
    });

    if (t < 0) {
        clearInterval(countdown);
        timingArea.innerHTML = `<h4 class="expired">Registration closed!</h4>`;
    }
}
// countdown;
let countdown = setInterval(getRemaindingTime, 1000);
//set initial values
getRemaindingTime();