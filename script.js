//static database


const months = [
    'Jan',
    'Feb',
    'March',
    'April',
    'May',
    'June',
    'July',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
];
const weekdays = [
    'Sun',
    'Mon',
    'Tues',
    'Wed',
    'Thurs',
    'Fri',
    'Sat',
];
//database ends here

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

let futureDate = new Date(2022, 11, 15, 10, 30, 0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minuts = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];

const date = futureDate.getDate();

const weekday = weekdays[futureDate.getDay()];

giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minuts}AM`;

//future time in milli-secs

const futureTime = futureDate.getTime();

function getRemainingTime() {
    const today = new Date().getTime();
    const t = futureTime - today;

    //1s = 1000ms
    //1m = 60s
    //1hr = 60mins
    //1d = 24hr
    :
    //values in milli-sec
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;
    //calculation of all value:
    let days = t / oneDay
    days - Math.floor(days);

    let hours = Math.floor((t % oneDay) / oneHour);
    let minuts = Math.floor((t % oneHour) / oneMinute);
}
getRemainingTime();