 /*const buttons=document.querySelectorAll('button')

 document.addEventListener('click',() =>{
     console.log("Clicked Document")
     //console.log(e.target)
 })


 document.body.addEventListener('click', ()=>{
     console.log("Clicked Body")
 },   )  //{capture: true}


 buttons.forEach(button=> {
     button.addEventListener('click',e=>{
         e.stopPropagation()
         console.log("Clicked Button")
     })



 })


*/
 

 document.addEventListener('click',e=>{
     //console.log('click Button')

     if(e.target.matches('button')){
         console.log('Clicked Button')
     }
  })


 const newButton=document.createElement('button')

 newButton.innerText='Button 5'
 document.body.append(newButton)