const grandParent=document.querySelector('#grand-parent')

//grandParent.style.color="red"

const parentOne=grandParent.children[0]

//const parentTwo=grandParent.children[1]
const parentTwo=parentOne.nextElementSibling

const childOne=parentOne.children[0]
const childTwo=parentOne.children[1]
//parentOne.style.color="red"
//parentTwo.style.color="green"

//Now we are starating from Children and going to their root element

const child1=document.querySelector(".child1")
child1.style.color="red"

const Parent1=child1.parentElement
Parent1.style.color="green"
parent2=Parent1.nextElementSibling
parent2.style.color="black"
//closest used for selecting first Parent element
const grandPas=child1.closest("#grand-parent")  
grandPas.style.color="red"


//Using common class and Foreach loop
const children=grandParent.querySelectorAll(".child")
children.forEach(child=>(  child.style.color="green"))