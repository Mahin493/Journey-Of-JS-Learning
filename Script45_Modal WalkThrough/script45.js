const modal=document.querySelector('#modal')
const OpenModalbtn=document.querySelector('#open-modal-btn')
const closeModalbtn=document.querySelector('#close-modal-btn')
const overlay=document.querySelector('#overlay')

//Creating a click event listener for the open modal-btn that adds the class "Open"
//to the modal
//Bonus :also add the class "open" to the overlay

OpenModalbtn.addEventListener('click',closeModal=>{
    
})

closeModalbtn.addEventListener('click',()=>{
   closeModal()

})

overlay.addEventListener('click',()=>{
     modal.classList.remove("open")
    overlay.classList.remove("open")

})

function closeModal(){
     modal.classList.remove("open")
     overlay.classList.remove("open")

}