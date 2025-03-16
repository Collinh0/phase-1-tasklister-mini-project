document.addEventListener("DOMContentLoaded", () => {
  // your code here
});
let myForm = document.getElementById("create-task-form");
let myText = document.getElementById("new-task-description");
let button = document.getElementById("submit-button");
let myTasks = document.getElementById("tasks");

//adding event listener
myForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let text = myText.value;
  console.log(text);

  const lists = document.createElement("li");

  const textnode = document.createTextNode(myText.value);

  lists.appendChild(textnode);
  myTasks.appendChild(lists);

  //making delete button to function
  let handleDeleteButton = document.createElement("button");
  handleDeleteButton.classList.add("deleteButton");
  let deletemyText = document.createTextNode("  X");
  handleDeleteButton.appendChild(deletemyText);
  lists.appendChild(handleDeleteButton);

  let initiateDelete = document.getElementsByClassName("deleteButton");
  initiateDelete = Array.from(initiateDelete);

  initiateDelete.forEach((button) => {
    button.addEventListener("click", function () {
      const list = button.parentNode;
      list.remove();
    });
  });
});