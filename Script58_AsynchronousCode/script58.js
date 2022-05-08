setTimeout(()=>{
    console.log("inside")
    setTimeout(()=>{
        console.log("Inside 2")
    },100)
  //nesting call back inside callback make Callback hell
    setTimeout(()=>{
        console.log("Inside 3")
    },1000)
},1000)


//Asynchronous code is something that does not execute in a normal way.
const buttonb=document.querySelector(".mybutton")
//buttonb.addEventListener('click',() =>{
    addClickEventListener(buttonb,()=>{
    console.log('Clicked')

})



function addClickEventListener(element,callback){
    element.addEventListener("click",callback)
}

//console.log("Outside")