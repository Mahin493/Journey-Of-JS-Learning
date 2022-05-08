function test(){
    console.log("Hi 1")
    console.log("Hi 2")
    new Promise((resolve,reject)=> resolve("Hi promise")).then
    (message=> console.log(message)
    
    )

    setTimeout(()=>console.log("Hi 3"),10)
    setTimeout(()=>console.log("Hi 4"),0)
    console.log("Hi 5")
}

test()