const button=document.querySelector('button')

button.addEventListener('click',e=>{
console.log("Arrow This")
console.log(this)
//This is arrow act like gloval this>Window object
})

button.addEventListener('click',function (e){
 console.log("Function This ")
 console.log(this) 
 //This arrow act like a local .it returns current object button here.
})

//Better use Target to find current object

button.addEventListener('click', (e)=>{
 console.log("Finding object Button ")
 console.log(e.target) 
 
})

console.log(this===window)
