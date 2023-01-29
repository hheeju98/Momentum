const ymd = document.querySelector("#fullYear");
const clock = document.querySelector("#clock");

function getFullYear() {
  const date = new Date();
  const year = String(date.getFullYear()).padEnd(5, "년");
  const month = String(date.getMonth() + 1)
    .padStart(2, "0")
    .padEnd(3, "월");
  const day = String(date.getDate()).padStart(2, "0").padEnd(3, "일");
  ymd.innerText = `${year} ${month} ${day}`;
}
getFullYear();
function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0").padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getClock(); // 즉시 실행
setInterval(getClock, 1000); // 즉시 실행 후 1초마다 실행
