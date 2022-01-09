const btn=document.querySelector("[data-btn]")
//btn.style.color="red";
function printClick(){
    console.log("Clicked")
}
btn.addEventListener('click',printClick)



// btn.addEventListener('click',()=>{
//     console.log("Clicked 2")
// })

//Remove Event Listener
// btn.removeEventListener('click',()=>{

// })
//btn.removeEventListener("click",printClick)

btn.addEventListener("click",e=>{
    console.log(e)
})

//Working with our input box
const input=document.querySelector('[data-input-text]')
input.addEventListener('input',e =>{
    //console.log("input")
    if(e.target.value==="Mahin"){
        console.log("Okay"+input.value)
    }
})

//Working with Our Form now 
const form=document.querySelector('[data-form]')

form.addEventListener('submit',e=>{
    e.preventDefault()
  console.log("Form Submitted")
})

//Task :Add an anchor tag to the HTML and when it is clicked prevent the
//default and log something to the console

const anchorTag=document.querySelector('a')

anchorTag.addEventListener('click',e=>{
  e.preventDefault()
  alert("Action Prevented")
})