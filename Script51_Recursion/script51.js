//Recursion

function printNumber(number){
    if(number<=10) {
        console.log(number)
       printNumber(number+1)
    }
    
}

printNumber(1)

//Printing Sum with function

function sumNumbersBelow(numbers){
    if(numbers<0) return 0
    return numbers+sumNumbersBelow(numbers-1)
}

console.log(sumNumbersBelow(2))

//An Exercise ::

const person={
    name:"Mahin",
    friend:{
        name:"joy",
        friend:{
            name:"Sally"
        }
    }
}

let currentPerson=person
while(currentPerson!=null){
    console.log(currentPerson.name)
    currentPerson=currentPerson.friend
}

//Doing it with Recursion

function printName(currentPerson){
    if(currentPerson==null) return
    console.log(currentPerson.name)
    printName(currentPerson.friend)
}

printName(person)