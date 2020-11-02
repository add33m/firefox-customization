const time = document.getElementById("time");
const clock = document.getElementById("clock");
const date = document.getElementById("date");

const hour = document.getElementById("hour");
const minute = document.getElementById("minute");

const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

// Present dates and times in a clock-like format (ex. 07 instead of 7)
function clockify(n) {
  if (n < 10)
    return `0${n}`;
  else
    return n;
}

function updateTime() {
  const currentDate = new Date();

  minute.innerText = clockify(currentDate.getMinutes());
  hour.innerText = clockify(currentDate.getHours());
  day.innerText = clockify(currentDate.getDate());
  month.innerText = clockify(currentDate.getMonth() +1); // Because months start at 0 (why?)
  year.innerText = currentDate.getFullYear();
}

// Check how many millis there are until the next whole minute,
// then after that time start a loop that updates the clock every minute
updateTime();

const millisUntilNextSecond = 1000 - new Date().getMilliseconds();
const millisUntilNextMinute = millisUntilNextSecond + (60 - new Date().getSeconds()) * 1000;
setTimeout(() => {
  updateTime();
  setInterval(updateTime, 1000 * 60);
}, millisUntilNextMinute);