document.addEventListener("DOMContentLoaded", () => {
   const createTask  = document.querySelector("[value='Create New Task']")
        console.log(createTask)

   createTask.addEventListener('click', function(e) {
       e.preventDefault()
       console.dir(e.target)

     const liContent = document.getElementById("new-task-description").value 
     console.log(liContent)
   })
  


});

//step 1 get the element pert- createNewTask
//step 2 create a listener for it, when you click on "create new task"
// step 3 create a function that does alot of things, grab whats in the text box and creates an 'li' in the myTodos
//step 4 create a delete button with its own ......