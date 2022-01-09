const isuserlogin=false
if(isuserlogin){
    console.log("logged in")
}
else{
    console.log("no login")
}
//Ternary operation

isuserlogin? console.log("Logged in"):console.log("not logged in")

// when to beteer use ternary

// var welcomeMessage=''

// if(isuserlogin){
//     welcomeMessage="welcome"
// }
// else{
//     welcomeMessage="Please Login"
// }

// console.log(welcomeMessage)

//Now better use a ternary

const welcomemessage=isuserlogin?"welcome":"Please login"

console.log(welcomemessage)