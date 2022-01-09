const a=[1,2,3,4,5,6]

a.forEach( (number,index)=>{

    console.log(number +" "+index)
})
//map
const newA=a.map((number)=>{
   return number*2
})

//filter
const filterA=a.filter(number =>{
    return number>3
    //return false
})
//find , return only one particular value 
const findA=a.find(number=>{
    return number>2
})

//some, return a boolean value true if at least one value is true
const someA=a.some(number=>{
    return number>2

})

//every, all value has to be true
const everyA=a.every(number=>{
    return number>5
})
 
//reduce
const reduceA=a.reduce((sum,number)=>{
    return sum+number
},0)



console.log(a)
console.log(newA)
console.log(filterA)
console.log(findA)
console.log(someA)
console.log(everyA)

console.log(reduceA)

const items=[
    {price:10},
    {price:20},
    {price:30},
    {price:40}
]

const sumPrice=items.reduce((sum,item)=>{
    return sum+item.price
},0)
console.log(sumPrice)


console.log(a.includes(9))


/*
function myyss(){
    ///dddd
}

const obj={
    addme: function(name) {
        
    },

    addme2(){

    }

 } */

