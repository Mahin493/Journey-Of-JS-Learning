const ForeachA=[1,2,3,4,5]

//ForEach
ForeachA.forEach((number,index)=>{
       console.log(number +" "+index)
})

//console.log(a[0])
//Map use to modify an Array like multiply elements
mapA=[1,2,3,4,5]
const newmapA=mapA.map((number)=>{
    return number*2
})
console.log(newmapA)

//Filtering an array use for a specific range

const filterA=[1,2,3,4,5]

const newfilterA=filterA.filter((number)=>{
    return number>3
})
console.log(newfilterA)

//Find used only for a single value to find <less than or greater than >
const findA=[1,2,3,4,5]
const newfindA=findA.find((number) =>{
    return number>2;
})
console.log(newfindA)

//Some a boolena function returns true or false
const someA=[1,2,3,4,5]

const newsomeA=someA.some((number)=>{
    return number >8
})

console.log(newsomeA)

//every => all elements must have to fullfill the condition
const everyA=[2,3,6,7]

const neweveryA=everyA.every((number)=>{
    return number>4
})

console.log(neweveryA)

//Reduce function at least two perameters 

const reduceA=[14,21,3,4,8]

const newreduceA=reduceA.reduce((mynum,number)=>{
  return mynum+number; //whatever returns after itteration that would become mynum
},0)

console.log(newreduceA)
//calculating price of different items
const priceList=[
  {price:10},
   {price:20},
   {price:30},
    {price:40},
     {price:70}

]

const totalPrice=priceList.reduce((sum,myprice)=>{
    return sum+myprice.price
}, 0)

console.log(totalPrice)

//include
const includeA=[4,5,6,7]
const istrue=includeA.includes(4)
console.log(istrue)