// const promise=new Promise((resolve,reject)=>{
// const multiply=5*3

// if(multiply==20){
//     resolve("Success")
// }
// else{
//     reject("Error")
// }

// })

// promise.then(message=>{
//     console.log(message)
// })
// .catch(message=>{
//     console.log(message)
// })

//Asynchronous SettimeOut vs Promise

// setTimeout(()=>{
//     console.log("Here")
// },250)

setTimeoutPromise(250).then(()=>{
      console.log("then")
})

function setTimeoutPromise(duration){
  return  new Promise((resolve,reject)=>{
        setTimeout(resolve,duration)
    })
}

//A promise version of addEventListener
const butoon=document.querySelector('button')
function addEventListenerPromise(element,method){
      return new Promise((resolve,reject) =>{
            element.addEventListeer(method,resove)
      })
}