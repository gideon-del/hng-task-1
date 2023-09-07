const timeEl = document.getElementById("time");
const dayEl = document.getElementById("day");
const date = new Date();
const arrayDay = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let minute = date.getUTCMinutes();
let seconds = date.getUTCSeconds();
let hour = date.getUTCHours();
const padString = (num) => {
  return String(num).padStart(2, 0);
};
const timeInterval = setInterval(() => {
  if (seconds === 60) {
    seconds = 0;
    if (minute === 60) {
      if (hour === 23) {
        hour = 0;
      } else {
        hour += 1;
      }
      minute = 0;
    } else {
      minute += 1;
    }
  } else {
    seconds += 1;
  }
  timeEl.textContent = `${padString(hour)}-${padString(minute)}-${String(
    padString(seconds)
  )}`;
}, 1000);

window.addEventListener("DOMContentLoaded", () => {
  dayEl.textContent = arrayDay[date.getDay()];
  timeEl.textContent = `${padString(hour)}-${padString(minute)}-${String(
    padString(seconds)
  )}`;
});
window.addEventListener("unload", () => {
  clearInterval(timeInterval);
});
