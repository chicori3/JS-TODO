const clock = document.querySelector("#clock");

const getClock = () => {
  // Date 객체에서 시간 가져오기
  const date = new Date();
  // padStart()는 String의 길이를 맞춰준다
  const hour = String(date.getHours()).padStart(2, "0");
  const min = String(date.getMinutes()).padStart(2, "0");

  clock.innerText = `${hour}:${min}`;
};

getClock(); // 최초 실행
setInterval(() => {
  getClock(); // 1초마다 실행
}, 1000);
