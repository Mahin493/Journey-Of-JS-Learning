console.log(true||true)

function printTrue(){
    console.log("True")
    return true
}

function printFalse(){
    console.log("False")
    return false
}

printTrue()||printFalse()
printFalse()||printTrue()

function printName(name){
    // if(name==null){
    //     name='Default'
    // }
    name=name||'Default'
    console.log(name)
}

printName("Mahin")

const person={
    name:"Mahin",
   address:{
       street:"Main st"
   }
}
if(person!=null&& person.address!=null){
    console.log(person.address.street)
}
//console.log(person.address.street)

console