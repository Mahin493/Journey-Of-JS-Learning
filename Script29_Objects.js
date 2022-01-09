/*let name="Mahin"
const age=23;
const favoriteNum=06;
*/
let person={
name:"Mahin"
,age:25,
favoriteNum:37,
 sayHi:function(){
     console.log("hello");
 },
 sayHi2(){
     console.log("Hi")
 },
  property:"Value"
}
console.log(person.name);
person.sayHi2();
person.sayHi();

//Creating an object named Car with the properties
//1.Make
//2.Model
//3.condition

let Car={
    brand:"BMW",
    Model:"i2",
    isUsed:false,
    makeNoise(){
        console.log("brooom")
    }
}

console.log(Car.brand)
Car.makeNoise();

let person2={
    name:"Mahin",
    hobbies:["Playing video Games","Travelling"],
    address:{
             Street:"Road 8 Main St",
             City:"Dhaka",
             Country:"Bangladesh"
    }
}
console.log(person2.address.City)
console.log(person2.hobbies[0])

//Create an object Book 
//title-string,Author-object with the properties name and age

let book={
    Title:"The Old man and the sea",
    Author:{
        name:"Arnest Haminway",
        age:65
    }
}
book.Title="New One"
book.Author.name="No Name"
book.Author.age=46
console.log(book.Title)
console.log(book.Author.name)
console.log(book.Author.age)

let hobbies=["Tv","Travelling"];
hobbies[0]="Books"
console.log(hobbies)