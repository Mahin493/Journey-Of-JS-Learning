//let a=5

function print(variable){
    let c=4
   return function func(variable2){
        console.log(variable)
        console.log(variable2)
        console.log(c)
    }
    console.log(a)
}

let a=print(2)
a(3)

