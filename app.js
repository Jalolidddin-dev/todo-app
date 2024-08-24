let inputText = document.getElementById("input_text");
let registerBtn = document.querySelector("#register_btn");
let list = document.querySelector("#list");
// registerBtn.addEventListener("click", () => {
//   console.log(inputText.value);

//   inputText.value = null;
// });

// Input events

// inputText.addEventListener("keydown", () => {
//   console.log(inputText.value);
// });

// inputText.addEventListener("keyup", () => {
//   title.textContent = inputText.value;
// });

registerBtn.addEventListener("click", () => {
  let value = inputText.value;

  if (value == "") {
    alert("Bo'sh maydonni to'ldiring");
  } else {
    list.innerHTML += `
    <li id="list_item">
          <span id="todo_text">${value}</span>
          <div>
            <button id="item_delete">Delete</button>
            <button id="item_edit__btns">Edit</button>
          </div>
        </li>
    `;
  }

  let listItems = document.querySelectorAll("#list_item");
  let itemsDelete = document.querySelectorAll("#item_delete");
  let itemsEditBtns = document.querySelectorAll("#item_edit__btns");

  listItems.forEach((listitem, index1) => {
    // delete
    itemsDelete.forEach((itemdelete, index2) => {
      itemdelete.addEventListener("click", () => {
        if (index1 == index2) {
          listitem.style.display = "none";
        }
      });
    });

    // edit

    let modal = document.querySelector("#modal");
    let modalInput = document.querySelector("#modal_input");
    let modalBtn = document.querySelector("#modal_btn");
    let todoText = document.querySelectorAll("#todo_text");

    itemsEditBtns.forEach((item_edit, index3) => {
      item_edit.addEventListener("click", () => {
        modal.classList.add("modal_see");

        todoText.forEach((text, index4) => {
          if (index3 == index4) {
            modalInput.value = text.innerHTML;
          }

          modalBtn.addEventListener("click", () => {
            if (index3 == index4) {
              text.innerHTML = modalInput.value;
              modal.classList.remove("modal_see");
            }
          });
        });
      });
    });
  });

  modal.classList.remove("modal_see");
  inputText.value = null;
});

// let form = document.getElementById("form");
// let input = document.getElementById("input");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   console.log(input.value);
// });

// let arr = [1, 2, 3, 4];

// let arrMap = arr.forEach((item) => {
//   return item * 2;
// });

// console.log(arrMap);
