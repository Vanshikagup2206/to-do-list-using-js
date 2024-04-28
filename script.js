const todoList=document.getElementById('todoList');
const newTodoInput=document.getElementById('newTodo');
const addBtn=document.getElementById('addBtn');

function addTodo(){
    //get the input value

    const newTodoText = newTodoInput.value;
    newTodoInput.value='';

    //create a list item

    const listItem = document.createElement('li');

    // listItem.textContent = newTodoText;

    const completeCheckbox = document.createElement('input');
    const todoText = document.createElement('span');
    const deleteBtn = document.createElement('button');
    completeCheckbox.type='checkbox';
    todoText.textContent = newTodoText;
    deleteBtn.textContent = 'Delete';

    listItem.appendChild(completeCheckbox);
    listItem.appendChild(todoText);
    listItem.appendChild(deleteBtn);
    

    //add to ul

    todoList.appendChild(listItem);

    //whenever we click on delete button we want to remove that li
    deleteBtn.addEventListener('click',function(){
        todoList.removeChild(listItem);
    }) 

    completeCheckbox.addEventListener('change',function(){
        if(completeCheckbox.checked){
            listItem.classList.add('completed');
        }else{
            listItem.classList.remove('completed');
        }
    })
    newTodoInput.focus();
}

addBtn.addEventListener('click',addTodo);