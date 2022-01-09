
for(let i=0;i<10;i++){
    if(i>=2)
    break
    console.log("No")
}


//Foreach
const a=['A','X','Z']

for(let p=0;p<a.length;p++){
    //const element=a[p]
    //console.log(element)
    console.log(a[p])
}

//Create a for loop that 
for(let m=0;m<10;m++){
    if(m==5){
        break
    }
   
    console.log(m)
}

//While loop
let w=0
while(w<10){
    console.log(w)
    w++
}

//Task
const person={
    name:'Mahin',
    friend:{
        name:'joe',
        friend:{
            name:'Raihan'

        }
    }
}

let currentPerson=person
while(currentPerson!=null){
    if(currentPerson.name=='joe'){
        break
    }
    console.log(currentPerson.name)
    currentPerson=currentPerson.friend

}