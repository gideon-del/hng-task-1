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
const padString = (num) => {
  return String(num).padStart(2, 0);
};
const timeInterval = setInterval(() => {
  timeEl.textContent = `${Date.now()}`;
}, 1000);

window.addEventListener("DOMContentLoaded", () => {
  dayEl.textContent = arrayDay[date.getDay()];
  timeEl.textContent = `${Date.now()}`;
});
window.addEventListener("unload", () => {
  clearInterval(timeInterval);
});
