const a=[2,3,4,5,4,8,9,23]
a.push(11)
a.push("hi")
a.push(["hello","Hi","Bye"])
console.log(a[3])
console.log(a)
console.log(a.length)

const merge =[
    ["Hi","Bye"],
    [1,2,4]
]
console.log(merge[0][1])

//array inside of an array
const newone=[
    [1,2,3,4,5],
    [6,7,8,9,10],
    [11,12,13,14,15]
]

//print out 4,8,11
console.log(newone[0][3])
console.log(newone[1][2])
console.log(newone[2][0])
console.log(newone.length)