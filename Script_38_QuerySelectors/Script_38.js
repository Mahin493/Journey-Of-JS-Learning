const dataAttributeElement= document.querySelector('[data-test]')
console.log(dataAttributeElement)

const divwithClass=document.querySelectorAll(".div-class")
//Array.from(divwithClass)    
divwithClass.forEach(div =>(div.style.color="red"))
console.log(divwithClass)

const divwithId=document.querySelector('#div-id')

divwithId.style.color="green"
console.log(divwithId)

//input Elements
const inputs=document.querySelector(" body >input[type='text']")

console.log(inputs)
