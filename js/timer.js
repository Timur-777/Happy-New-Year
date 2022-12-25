const currentYear = new Date().getFullYear();
const nextYear = new Date(`January 01 ${currentYear + 1} 00:00:00`);

const day = document.querySelector(".day");
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

setInterval(showTime, 1000);
function showTime() {
  const currentTime = new Date();
  const difference = nextYear - currentTime;
  const dayLeft = Math.floor(difference / 1000 / 60 / 60 / 24);
  const hourLeft = Math.floor((difference / 1000 / 60 / 60) % 24);
  const minuteLeft = Math.floor((difference / 1000 / 60) % 60);
  const secondLeft = Math.floor((difference / 1000) % 60);

  day.innerText = dayLeft < 10 ? "0" + dayLeft : dayLeft;
  hour.innerText = hourLeft < 10 ? "0" + hourLeft : hourLeft;
  minute.innerText = minuteLeft < 10 ? "0" + minuteLeft : minuteLeft;
  second.innerText = secondLeft < 10 ? "0" + secondLeft : secondLeft;
}
