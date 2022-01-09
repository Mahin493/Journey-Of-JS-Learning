const userlogin=false

console.log("Please login")

if(userlogin){
    console.log("Login Succesful")

}
else{
    console.log("Login Failed")
}

//IF ELSE
if(''){
    console.log("Hello")
}
//' ',null,undefined return false
else{
    console.log("Hey Mr. Temborine Man")
}

//Tricks

const totalPrice=0
if(totalPrice!=null){
    console.log("Price is 0")
}
// if you write if(totalPrice) it will return false because value is 0 here
//but as value exist we want it to return true so we write if(totalPrice!=null)
//then return true

else{
    console.log("Price does not exist")
}

//Task=> Create a variable that contains an arry.
//using an if statement with else if check the length of the arry.
//if it is empty print out "empty"
// if size<5 print it's small
//if size<10 prints it's "medium"
//otherwise prints "large"

const myarray=['1','2','4','5']

const arraysize=myarray.length

if(arraysize==null){
    console.log("empty")
}
else if(arraysize<5){
    console.log("small")
}
else if(arraysize<10){
    console.log("medium")
}
else{
    console.log("large")
}