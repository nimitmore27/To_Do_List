const todoitem = document.getElementsByClassName("taskcon")[0];
const insert = document.getElementById("inputtxt");
const del = document.getElementById("del");

insert.addEventListener("keydown",function(event){
    if(event.key === 'Enter')
    {
        addtask();
    }
})
function addtask(){
    var divParent = document.createElement("div");
    var divChild = document.createElement("div");
    var checkbtn = document.createElement("button");

    divParent.className = 'item';
    divParent.innerHTML = '<div>'+insert.value+'</div>';

    checkbtn.className = 'Completed';
    checkbtn.style.color = 'white';
    checkbtn.addEventListener("click",function(){
        checkbtn.style.color = "red";
    })
    divChild.appendChild(checkbtn);
    del.className = "Delete";
    del.style.color = "red";
    del.addEventListener("click",function(){
        divParent.remove();
    })
    divChild.appendChild(del);
    divParent.appendChild(divChild);
    todoitem.appendChild(divParent);
    input.value = '';
}

