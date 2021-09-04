const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

const deleteToDo = (event) => {
  event.preventDefault();
  //   console.log(event.target.children);
  //   console.log(event.target);
  if (event.target.children.length !== 1) {
    const li = event.target.parentElement.parentElement;
    li.remove();
  } else {
    const li = event.target.parentElement;
    li.remove();
  }

  //   if (event.target != "button") {
  //     console.log(event.target);
  //     console.log("not a button");
  //   }

  //   console.log(event.target.parentElement);
  //   const li = event.target.parentElement;
  //   li.remove();
};

// input 값을 li로 생성하는 함수
const paintToDo = (newToDo) => {
  const li = document.createElement("li");
  const span = document.createElement("span");

  span.innerText = newToDo; // 생성된 span에 input 값 적용

  //   const editBtn = document.createElement("i");
  //   editBtn.setAttribute("class", "bx bx-edit");
  //   editBtn.innerHTML = "<i class='bx bx-edit-alt' ></i>";

  //   const delBtn = document.createElement("i");
  //   delBtn.setAttribute("class", "bx bxs-eraser");
  //   delBtn.innerHTML = "<i class='bx bxs-eraser'></i>";
  const delBtn = document.createElement("button");
  //   delBtn.setAttribute("class", "bx bxs-eraser");
  delBtn.innerHTML = "<i class='bx bxs-eraser'></i>";
  delBtn.addEventListener("click", deleteToDo);
  // 생성한 요소 추가
  li.appendChild(span);
  //   li.appendChild(editBtn);
  li.appendChild(delBtn);
  toDoList.appendChild(li);
};

// Enter 입력 시 발생할 이벤트
const handleToDoSubmit = (event) => {
  event.preventDefault();
  const newToDo = toDoInput.value; // input 값을 저장
  toDoInput.value = ""; // 저장하고 나서 빈 값으로 설정
  paintToDo(newToDo);
};

toDoForm.addEventListener("submit", handleToDoSubmit);
