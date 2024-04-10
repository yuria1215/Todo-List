function addItem() {
    console.log("addItem");
    const ul = document.getElementById("list");
    const input = document.getElementById("input");
    const text = input.value;
    if (text === "") {
        alert("請輸入內容");
        return;
    }

    const newItem = document.createElement("li");
    newItem.classList.add("item")
    newItem.innerText = text;

    newItem.onclick = checkItem;

    const deleteButton = document.createElement("span");
    deleteButton.classList.add("delete");
    deleteButton.onclick = deleteItem;

    newItem.appendChild(deleteButton);

    input.value = "";
    ul.appendChild(newItem);



}

function checkItem() {
    console.log("check");
    const item = this;
    item.classList.toggle("checked");

}

function deleteItem() {
    console.log("delete");
    const item = this.parentNode;  // li
    // const parent = item.parentNode;  // ul
    // parent.removeChild(item);
    item.remove();
}

const addButton = document.getElementById("add-button");
addButton.addEventListener("click", addItem);

const form = document.getElementById("input-wrapper");
form.addEventListener("submit", (e) => {
    // 取消DOM預設功能
    e.preventDefault();
})

