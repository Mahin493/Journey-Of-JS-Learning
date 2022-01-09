const favAnimal='Jaguar'

if(favAnimal==='Cat'){
    console.log("Cat is cool")
}
else if(favAnimal==='dog'){
    console.log('Dog is very loyal')
}
else if(favAnimal==='shark'){
    console.log("dangerous one")
}
else{
    console.log("Nothing")
}

//Now look into Switch Case

switch(favAnimal){
    case 'Jaguar':
    case 'mypet':    
    case 'Cat':
        console.log("Cat is cool")
        break
        
    case 'dog':
        console.log('Dog is very loyal')
        break
    case 'shark':
           console.log("dangerous one")
           break
    default:
        console.log("Nothing")       
}


//A simple task

const number=5

switch(number){
    case 0:
        console.log("It's zero")
        break
    case 1:
    case 2:    
        console.log("Small") 
         break
    case 3:
    case 4:  
     console.log("Medium") 
     break
    case 5:
         console.log("It's large")
         break
    default:
        console.log("Try again")
}