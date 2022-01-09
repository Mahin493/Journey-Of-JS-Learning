let a=10
let b='Hi'
let c=[1,2]
let d=c
d.push(3)

let x={name:"Mahin"}
let y=x
y.name="Mahiat"

console.log("a= "+a)
console.log("b= "+b)
console.log("c= "+c)
console.log("d=" +d)
console.log("x= "+JSON.stringify(x))
console.log("y= "+y.name)

let a1=[1,2]
let b1=[1,2]
//here only comparing memory address which is completely different

console.log(a1===b1)

const a2=[1,2]
const b2=[1,2]
a2.push(3) 
console.log("a2= "+a2)
console.log(b2)

const mine={name:"Mahin"}
mine.age=23
//mine={name:"Mahin"}  error
console.log(mine)

const number=[1,2]
const elementtoAdd=3
add(number,elementtoAdd)
console.log(number)
console.log(elementtoAdd)
function add(array,element){
    element+=1
    array.push(element)
}
