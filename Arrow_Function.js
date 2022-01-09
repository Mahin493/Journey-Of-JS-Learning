function sum(a,b){
    return a+b
}

console.log(sum(2,5))
//writing it in a Arrow Function
let sumArrow=(a,b)=>{
    return a+b
} 

console.log(sumArrow(3,5))

//another Arrow Function
function printName(name){
    console.log(name)

}

let printNameArrow=(name) =>{
    console.log(name)
}

printName("Mahin")
printNameArrow("Opu")

//sum Arrow
function sum(a,b){
    return a+b
}

let sumArrownew=(a,b) => {
//a+b witour carlybrace and return keyword
return a+b

} 

console.log(sum(22,4))
console.log(sumArrownew(4,7))

//Task
function printmyName(name){
    return "Hi "+name
}

let ArrowPrintname=(name)=> "Hi " +name

console.log(ArrowPrintname("Mahin"))

//Arrow with no parameter 
function hi(){
    console.log("Hi")

}
let hiArrow=()=>{
    console.log("Hi")
}

hiArrow()

//Arrow is used for simplified code
function func(x,callback){
    callback(x)
}

func(10, (variable)=> {
    console.log(variable)
})