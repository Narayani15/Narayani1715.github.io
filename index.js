const dob = new Date("2004-05-15");
const updateInterval = 100;
let age = 0.0;

age = getCurrentAge(dob);
updateAgeCounter(age);

setInterval(function () {
  age = incrementAge(age, updateInterval);
  updateAgeCounter(age);
}, updateInterval);

setInterval(function () {
  age = getCurrentAge(dob);
  updateAgeCounter(age);
}, 5000);

function getCurrentAge(dob) {
  const currentDate = new Date();
  let age = (currentDate - dob) / 31557600000;
  return parseFloat(age.toFixed(10));
}

function incrementAge(age, interval) {
  age = parseFloat(age) + 1 / (31557600000 / interval);
  return parseFloat(age).toFixed(10);
}

function updateAgeCounter(age) {
  document.getElementById("age-counter").innerText = age;
}
