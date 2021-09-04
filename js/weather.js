const API_KEY = "1ad0800483106818753e232a0ebedf4c";

// 이상 없으면 실행되는 함수
const onGeoOk = (position) => {
  const weatherContainer = document.querySelector("#weather");
  const weatherInfo = document.querySelectorAll("#weather span");

  // JSON에서 좌표값 가져오기
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  // api url
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;
  const airUrl = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

  // fetch()로 api 데이터 가져오기
  fetch(weatherUrl).then((response) =>
    response.json().then((data) => {
      const name = data.name;
      const weather = data.weather[0].main;
      const temp = data.main.temp;
      weatherInfo[0].innerHTML = name;
      weatherInfo[1].innerHTML = weather;
      weatherInfo[2].innerHTML = temp;
    })
  );

  fetch(airUrl).then((response) =>
    response.json().then((data) => {
      const aqi = data.list[0].main.aqi; // air quality info
      switch (aqi) {
        case 1:
          weatherInfo[3].innerHTML = `${aqi} 😖`;
          break;
        case 2:
          weatherInfo[3].innerHTML = `${aqi} 😣`;
          break;
        case 3:
          weatherInfo[3].innerHTML = `${aqi} 😐`;
          break;
        case 4:
          weatherInfo[3].innerHTML = `${aqi} 😃`;
          break;
        case 5:
          weatherInfo[3].innerHTML = `${aqi} 😆`;
          break;
        default:
          break;
      }
    })
  );
};

// 에러 시 실행되는 함수
const onGeoError = () => {
  alert("NO WEATHER");
};

// 현재 위치 가져오기
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
