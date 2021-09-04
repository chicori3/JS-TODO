const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let toDos = []; // todos 값을 담는 배열

// toDos 로컬스토리지에 저장
// 왜 람다식이 안될까?
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

// todo li 제거 함수
const deleteToDo = (event) => {
  event.preventDefault();

  // i를 클릭했을 경우
  if (event.target.children.length !== 1) {
    const li = event.target.parentElement.parentElement;
    li.remove();
  } else {
    // 버튼을 클릭했을 경우
    const li = event.target.parentElement;
    li.remove();
  }
};

// input 값을 li로 생성하는 함수
const paintToDo = (newToDoObj) => {
  const li = document.createElement("li");
  const span = document.createElement("span");

  li.id = newToDoObj.id;
  span.innerText = newToDoObj.text; // 생성된 span에 input 값 적용

  const delBtn = document.createElement("button"); // 버튼 생성
  delBtn.innerHTML = "<i class='bx bx-window-close bx-tada-hover'></i>";
  delBtn.addEventListener("click", deleteToDo);

  // 생성한 요소 추가
  li.appendChild(span);
  li.appendChild(delBtn);
  toDoList.appendChild(li);
};

// Enter 입력 시 발생할 이벤트
const handleToDoSubmit = (event) => {
  event.preventDefault();
  const newToDo = toDoInput.value; // input 값을 저장
  toDoInput.value = ""; // 저장하고 나서 빈 값으로 설정
  const newToDoObj = {
    id: Date.now(),
    text: newToDo,
  };
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();
  console.log(toDos);
};

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  // JSON을 javascript로 변환
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos; // 로컬스토리지의 todos를 배열에 담기

  // 저장된 todos 가져오기
  // 방법 1.
  //   for (let index in parsedToDos) {
  //     paintToDo(parsedToDos[index]);
  //   }

  // 방법 2.
  parsedToDos.forEach((element) => paintToDo(element));
  // parsedToDos.forEach(paintToDo);
}
