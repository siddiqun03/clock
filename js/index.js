let elDate = document.querySelector(".date");
let elTime = document.querySelector(".time");

let week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
let timerID = setInterval(updateTime, 1000);
updateTime();
function updateTime() {
  let newDate = new Date();
  elTime.innerHTML =
    zeroPadding(newDate.getHours(), 2) +
    ":" +
    zeroPadding(newDate.getMinutes(), 2) +
    ":" +
    zeroPadding(newDate.getSeconds(), 2);
  elDate.innerHTML =
    zeroPadding(newDate.getFullYear(), 4) +
    "-" +
    zeroPadding(newDate.getMonth() + 1, 2) +
    "-" +
    zeroPadding(newDate.getDate(), 2) +
    " " +
    week[newDate.getDay()];
}
function zeroPadding(num, digit) {
  let zero = "";
  for (let i = 0; i < digit; i++) {
    zero += "0";
  }
  return (zero + num).slice(-digit);
}
