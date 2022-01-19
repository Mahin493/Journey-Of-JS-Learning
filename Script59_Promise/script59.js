const promise=new Promise((resolve,reject)=>{
const multiply=5*3

if(multiply==20){
    resolve("Success")
}
else{
    reject("Error")
}

})

promise.then(message=>{
    console.log(message)
})
.catch(message=>{
    console.log(message)
})

//Asynchronous SettimeOut vs Promise

setTimeout(()=>{
    console.log("Here")
},250)

function setTimeoutPromise(){
  return  new promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("here")
        }, 250);
    })
}