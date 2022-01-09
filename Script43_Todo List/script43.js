//1.Select All Element
const form=document.querySelector("#new-item-form")
const list=document.querySelector("#list")
const input=document.querySelector('#item-input')

//2.When i submit the form add a new element
form.addEventListener('submit',e=>{
    e.preventDefault()
    //1. Create a new item
    const item=document.createElement('div')
    item.innerText=input.value
    item.classList.add('list-item')

    console.log(item)

    //2.Add that item to the list
    list.appendChild(item)
    //3.clear input
    input.value=' '
    //setup event listener to delete item whenever clicked

    item.addEventListener('click',()=>{
        list.removeChild(item)
    })


    
})