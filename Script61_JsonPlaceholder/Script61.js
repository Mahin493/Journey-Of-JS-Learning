const URL="https://jsonplaceholder.typicode.com/users/9"
const button=document.querySelector('button')
// let datafetch=fetch(URL).then(response=>{
// //console.log(response)
// return response.json()

// })
// .then(data=>{
//   //Log the Name of each of the users
//  const username= data.map(user=>user.name)

//     console.log(username)
// })

//Do the same task with Async Await :-

async function dostuff(){
  const response= await fetch(URL)

  //console.log(response.ok)
  try{
      if(response.ok){
      const  user=await response.json()
  console.log(user)
  //console.log(users.map(users=>users.name))

  } 
  else{

    console.log("FAILURE")

  }

  }
  catch (e){
      console.log(e)
  }
  
  

}

//dostuff()

button.addEventListener('click',()=>{

    dostuff()
})
