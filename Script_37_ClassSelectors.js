const divId=document.getElementById('div-id')
divId.style.color="red"
console.log(divId)

//Class Name 
const divsWithClass=document.getElementsByClassName('div_class')
divsWithClass[0].style.color="green"
console.log(divsWithClass)

//Change all index color at a time with foreach abd forming Arrau
const divswithClassArray=Array.from(divsWithClass)
divswithClassArray.forEach(div =>(div.style.color="green"))
 