const inp = document.querySelector("input");
const addBtn = document.querySelector("#add");
const editBtn = document.querySelector("#edit");
const DelBtn = document.querySelector("#delete");
const todolist = document.querySelector("#todo-list");
let itemNo = 0;

addBtn.addEventListener("click", (e) => {
  if (inp.value == "" || inp.value.length == 0) {
    alert("Please input the task details");
    inp.focus();
    return;
  }
  if (e.target.textContent == "Update") {
    let updateItemId = e.target.getAttribute("update_id");
    let updateItem = document.querySelector("#" + updateItemId);
    updateItem.querySelector("h3").textContent = inp.value;
    inp.value = "";
    e.target.textContent = "Add";
    inp.focus();
  } else {
    todolist.innerHTML += `
    <div class="item" id="item_${++itemNo}">
          <h3>${inp.value}</h3>
          <div class="buttons">
            <button id="edit">Edit</button>
            <button id="delete">Delete</button>
          </div>
        </div>
    `;

    inp.value = "";
  }
});

todolist.addEventListener("click", (e) => {
  if (e.target.matches("#edit")) {
    let item = e.target.closest(".item");
    let item_id = item.getAttribute("id");
    let h3 = item.querySelector("h3");
    inp.value = h3.textContent;
    addBtn.textContent = "Update";
    addBtn.setAttribute("update_id", item_id);
    inp.focus();
  }

  if (e.target.matches("#delete")) {
    let item = e.target.closest(".item");
    item.remove();
  }
});
