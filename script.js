const addTodoButton = document.getElementById("addTodo");
const inputField = document.getElementById("inputField");
const todoContainer = document.getElementById("todoContainer");

addTodoButton.addEventListener("click", () => {
   let paragraph =  document.createElement("p");
   paragraph.innerText = inputField.value;
   paragraph.classList.add("paragraph-styling");
   todoContainer.appendChild(paragraph);
   inputField.value = "";

   paragraph.addEventListener("click", () => {
    paragraph.style.textDecoration="line-through";
   });

   paragraph.addEventListener("dblclick", () => {
    todoContainer.removeChild(paragraph);
   });
});
