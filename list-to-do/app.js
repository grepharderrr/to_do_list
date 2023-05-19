//////////////////////SELECTEURS//////////////////////////
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");


//////////////////////ECOUTEURS/////////////////////////
document.addEventListener("DOMContentLoaded", getTodo);
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCkeck);
filterOption.addEventListener("input", filterTodo);


/////////////////////FONCTIONS/////////////////////////

function addTodo(event) {
event.preventDefault();  //pour arréter le rechargement automatique de la page 
    // console.log("hello");

    //todo DIV 

    const todoDiv = document.createElement("div"); //pour créer un élement dans le HTML 
    todoDiv.classList.add("todo"); //classList pour ajouter une classe a notre div

    //créer le li
    const newTodo = document.createElement("li");

    //ajouter la todo au localstorage
    saveLocalTodos(todoInput.value);
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    //button check

    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fa-solid fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    //button supprimer

    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
todoList.appendChild(todoDiv);
}

function deleteCkeck(e){
const item = e.target;

//DELETE TODO 

if (item.classList[0] === "trash-btn"){
const todo = item.parentElement;
todo.classList.add("fall"); //ajout de classe pour l'animation CSS 
//item.remove();
//todo.remove();
todo.addEventListener("trasitioned", function(){

    todo.remove();
});

}
//check mark
if (item.classList[0] === "complete-btn") {
 
    const todo = item.parentElement;
    todo.classList.toggle("completed")

}
}

function filterTodo(e){
    const todos = todoList.childNodes;
    todos.forEach(function (todo){
        switch (e.target.value){
            case "all" :
                todo.style.display = "flex";
                break;
            case "completed" :
            if (!todo.classList.contains("completed")){
                todo.style.display ="flex";

            } else {
                todo.style.display = "none";

            }
            break;
            case "uncompleted":
                if(todo.class.List.contains("completed")){
                    todo.style.display = "none";

                }
                break;

        }
    });
} 
function saveLocalTodos(todo){
    //check si il ya des items existant 

    let todos 
    if ( localStorage.getItem("todos") === null){
        todos = [];

    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
    //stringify permet d'afficher la todolist

}

function getTodo() {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.forEach(function (todo) {
        //todo DIV 
        const todoDiv = document.createElement("div"); //pour créer un élement dans le HTML 
        todoDiv.classList.add("todo"); //classList pour ajouter une classe a notre div
 
        //créer le li
        const newTodo = document.createElement("li");
        newTodo.innerText = todoInput.value;
        newTodo.classList.add("todo-item");
        todoDiv.appendChild(newTodo);
 
        //button check
        const completedButton = document.createElement("button");
        completedButton.innerHTML = '<i class="fa-solid fa-check"></i>';
        completedButton.classList.add("complete-btn");
        todoDiv.appendChild(completedButton);
 
        //button supprimer
        const trashButton = document.createElement("button");
        trashButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
        trashButton.classList.add("trash-btn");
        todoDiv.appendChild(trashButton);
        todoList.appendChild(todoDiv);
    });
}