const ToDoItems = document.getElementsByClassName("to_do_items")[0];
const input = document.getElementById("input");
const trashIcon = document.getElementById("trash");
input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addItem();
    }
});
function addItem() {
    if (input.value === '') {
        alert("Please Enter A Task !");
        document.getElementById('input').focus();
    } else {
        let divParent = document.createElement("div");
        let divChild = document.createElement("div");
        let checkIcon = document.createElement("i");
        let trashIcon = document.createElement("i");
        divParent.className = "item";
        divParent.innerHTML = "<div>" + input.value + "</div>";
        checkIcon.className = "fas fa-check-square";
        checkIcon.style.color = "darkgray";
        checkIcon.addEventListener("click", function () {
            if (checkIcon.style.color === 'limegreen') {
                checkIcon.style.color = 'darkgray'
                divParent.style.textDecoration = 'none';
            } else {
                checkIcon.style.color = "limegreen";
                divParent.style.textDecoration = 'line-through';
            }
        })
        divChild.appendChild(checkIcon);
        trashIcon.className = "fas fa-trash";
        trashIcon.style.color = "darkgray";
        trashIcon.addEventListener("click", function () {
            divParent.remove();
        })
        divChild.appendChild(trashIcon);
        divParent.appendChild(divChild);
        ToDoItems.appendChild(divParent);
        input.value = '';
        document.getElementById("input").focus();
    }

}
