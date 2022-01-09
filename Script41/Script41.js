const test=document.querySelector("[data-test]")

test.dataset.test="6789"
console.log(test.dataset)
//test.dataset

//Select All Buttons

const buttons=document.querySelectorAll('button')
buttons.forEach(button=>{
button.addEventListener('click',()=>{
    const currentClick=(parseInt(button.dataset.clicks))
    button.dataset.clicks=currentClick+1
    //console.log(button.dataset.clicks)
})

})