let a=10;
let b="hi"
let c=a
c=c+1

//Array referencing
let Array1=[1,2]
let Array2=Array1 //if Array2 is changed Array1 will change also
Array2.push(3)

let string={
    name:"Mahin"
}
let string2=string
string2.name="Opu"
console.log("a is "+a)
console.log("b is "+b)
console.log("c is "+c)

console.log("Array1 is "+Array1)
console.log("Array2 is "+Array2)

console.log("String1 is "+JSON.stringify(string))
console.log("String2 is"+JSON.stringify(string2))

//More confusing things works with address
let a1=[1,2]
let b1=[1,2]

console.log(a===b) //false because their address(0x01) are not same
console.log(a==b)

const a11=[1,2]
const a22=[1,2]
a11.push(3)
//a11=[1,2,5] error 
console.log( a11)

//Anothe referencing
const Fa=[1,6] //0x01
const elementToadd=3
add(Fa,elementToadd) //0x01,3
console.log(Fa)
console.log(elementToadd)
function add(array,element){
    element=element+1 //4 just pass by value
    array.push(element)//0x01 pass by reference
}
