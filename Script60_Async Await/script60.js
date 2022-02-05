function setTimeoutPromise(delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            //reject('Error')
            resolve(`you waited ${delay} milliseconds`)
            
         },delay)
    })
}

/*
setTimeoutPromise(650).then((message)=>{
    console.log(message)
    console.log("1")
    return setTimeoutPromise(250)
})
.then(()=>{
    console.log("2")
})
*/
// Do this by Async way

async function doStuff(){
   try{
     const message=await setTimeoutPromise(250)
    
    console.log(message)
    console.log("1")
    const message2=await setTimeoutPromise(250)
    console.log(message2)
    console.log("5")
   }
   catch(error){
     console.log(error)
   }

    
}

doStuff()

//My Task:- do it

function getValueWithDelay(value,delay){
    return new Promise((resolve,rejecy)=>{

        setTimeout(()=>{
          resolve(value)
        },delay)
       
    })
}



function getValueWithdelayError(value,delay){
    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
          reject('Error')
        },delay)
       
    })
}

// Call getValuewithDelay twice and print out the returned value
//then call getValuewithDelayErroe and make sure that the error is properly
//caught 
async function dostuff1(){

    try{
            const value1=  await getValueWithDelay('Mahin',250)
             console.log(value1)
             const value2=  await getValueWithDelay('Apu',250)
             console.log(value2)
             
             const value3=  await getValueWithdelayError('HI',250)
             console.log(value3)
    }       
    catch(e){
        console.error(e)
    } finally{
        console.log("Finally")
    }
    
   
}

dostuff1()

//shorly can be written:-

getValueWithDelay('Mahiat',250).then(message=>console.log(message))