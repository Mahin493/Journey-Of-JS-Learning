function sayHi(name){
    let a=4
    let result="Hi "+name +a
    
    console.log(result)
}
let a=5
let name="Mahin"
sayHi(name)
//console.log(result)

//scoping
{
    let j=4
    console.log(j)
    {
        let b=5
        console.log(b)
    }

}

console.log(j)