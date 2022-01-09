function sayhi(){
  console.log('hello there!')
  console.log('bye!')
  

}
    


sayhi()
//function aaaaaaaaaaaaaaaa
sayhi()
//Function with Argument

function sum(a,b){
    let c=a+b;
    console.log(c)

}
let x=5
let y=12
sum(1,2)

sum(x,y)

//Create a fuction which prints your name

function printName(name,age){
    console.log(name)
    console.log(age)
}

printName(undefined,23)

//Return values from function
function sumnew(a,b){
    return a+b;
}

let s=sumnew(2,3)
console.log(s)

//Task create a function with one argument name that 
function myname(name){
    //console.log("Hello "+name)
    return "Hello "+name

    console.log('This will never run')
}
let result=myname("Mahin")
console.log(result)  
//myname('Mahin')

//Intermediate level Function
function printvariable(variable){
    console.log(variable)
    console.log('hi')
}


function func(x){
    console.log('before')
    x("hello world")
    console.log('after')
}

printvariable("Hello")

func(printvariable)

//calling function through function
function sumCallback(a,b,callback){
    callback(a+b)

}

function handlesum(sum){
    console.log(sum)
}

sumCallback(4,5,handlesum)

/* Create a function that takes two parameter
1.name
2.callback that print out what we pass to it (showname)
3.take name and append "Hello" to the beginning of the name
like if we pass Mahin it will print hello Mahin



*/

// function getName(variable){
//     console.log(variable)

// }
function showName(name,callback){
    callback("Hello " +name)
}

//showName("Mahin",getName)

showName("Mahin",function(variable){

    console.log(variable)
})
