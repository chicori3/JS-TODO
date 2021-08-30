// DOM 요소 할당
const loginInput = document.querySelector("#login-form input");
const loginBtn = document.querySelector("#login-form button");

// 로그인 이벤트
const handleLoginClick = () => {
  const username = loginInput.value;
  console.log(username);
};

loginBtn.addEventListener("click", handleLoginClick);
