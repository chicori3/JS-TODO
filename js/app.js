// DOM 요소 할당
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const title = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const onLoginSubmit = (event) => {
  event.preventDefault(); // submit 이벤트 방지

  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username); // 로컬 스토리지에 저장
  loginForm.classList.add(HIDDEN_CLASSNAME); // hidden 클래스 추가
  paintTitle(username); // 타이틀 출력 함수 호출
};

// 타이틀 출력 함수
const paintTitle = (username) => {
  title.innerText = `HELLO ${username}`; // title 요소 변경
  title.classList.remove(HIDDEN_CLASSNAME); // hidden 클래스 제거
};

const saveUsername = localStorage.getItem(USERNAME_KEY); // 로컬 스토리지에서 이름 가져오기

// 로컬 스토리지 정보 확인
if (saveUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME); // 로그인 폼이 보임
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintTitle(saveUsername); // 저장된 이름 출력
}
