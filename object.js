let name="Mahin"
const age=23
const favoriteNo=5

let persons={
    name:"Mahin",
    age:23,
    favoriteNo:5,
    sayHi:function(){
        console.log("Hi There")

    },
    sayHi2(greetings){
        console.log(greetings)
    },
    property:"value"
}

console.log(persons)
console.log(persons.age+   persons.name)
persons.sayHi()
persons.sayHi2("Good Evening")

//Now create an object called car with the properties
// 1.make
//2.Model
//3.isUsed
//Add a function called makeNoise which logs out vroom

let car={
    Make:"Audi",
    Model:"3fcvr4ww",
    isUsed:false,

    makeNoise: function(){
        console.log("Vroom")
    },
    makeNoise2(){
        console.log("Vroom")
    }
}

car.makeNoise()
console.log(car.isUsed)
console.log(car.Make)
//another example

let newperson={
    name:"Mahin",
    hobbies:["Watching Tv-Series","Programming"],
    address:{
        street:"12345-gulshan",
        city:"Dhaka",
        phone:"01644305371",
    }

}

console.log(newperson.address.street)
console.log(newperson.hobbies[1])

//Task Create an object called book with the following properties
//1.Title
//2.Author - object with the properties name n age

let book={
    title:"Old man and the Sea",
    Author:{
        name:"Arnest Haminway",
        Age:67

    }
}
book.title="New one"
console.log(book.title +". Author:  "+book.Author.name)