

const form=document.querySelector('#new-todo-form')
const todoInput=document.querySelector('#todo-input')
const list=document.querySelector('#list')
const template=document.querySelector('#list-item-template')

const LOCAL_STORAGE_PREFIX='ADVANCED_TODO_LIST-'
const TODOS_STORAGE_KEY=`${LOCAL_STORAGE_PREFIX}-todos`
const todos=loadTodos()
console.log(todos)
todos.forEach(renderTodo)

list.addEventListener('change',e=>{
    if(!e.target.matches('[data-list-item-checkbox]')) return
    
    //Get the todo that is clicked
    const parent=e.target.closest('.list-item')
    const todoId=parent.dataset.todoId
    const todo=todos.find(t =>t.id===todoId)
    todo.complete=e.target.checked
    //Toggole The complete property to be equal to the checkbox value

    saveTodos()
    //Save our updated todo

})

//For delete todos

list.addEventListener('click',e=>{
    if(!e.target.matches('[ data-button-delete]')) return

    const parent=e.target.closest('.list-item')
    const todoId=parent.dataset.todoId
    parent.remove()

    //Remove the todo from the list
    todo=todos.filter(todo=>todo.id!==todoId)
    saveTodos()
})



//Add Todo
//User will type in todo and click add todo button

form.addEventListener('submit', e=>{
    e.preventDefault()

    const todoName=todoInput.value
    if(todoName==="") return
    const newTodo={
        name:todoName,
        complete:false,
        id:new Date().valueOf().toString()
    }

    todos.push(newTodo)

    //Render Todo
    renderTodo(newTodo)
    saveTodos()
    todoInput.value=" "

})

function renderTodo(todo){
    const templateClone = template.content.cloneNode(true)
    const textElement=templateClone.querySelector("[data-list-item-text]")
    const listItem=templateClone.querySelector('.list-item')
    listItem.dataset.todoId=todo.id
    textElement.innerText=todo.name
    //console.log(templateClone)
    const checkbox=templateClone.querySelector('[data-list-item-checkbox]')
    checkbox.checked=todo.complete
    list.appendChild(templateClone)
}

//Load Todos
function loadTodos(){
    const todoString=localStorage.getItem(TODOS_STORAGE_KEY)
    return JSON.parse(todoString)||[]
}

//Save Todos

function saveTodos(){
    localStorage.setItem(TODOS_STORAGE_KEY,JSON.stringify(todos))




}


//Delete Todo
//Complete Todos


