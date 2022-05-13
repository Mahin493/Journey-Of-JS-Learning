//LOcal storage  | cookies         | Session Storage

// 10 MB         | 4KB             | 5MB

//Never expires  |Manual Expires  | Expire on tab close(shopping cart)

//Client         | Client/Server   | Client
//Easy           | Hard            | Easy



localStorage.setItem("Name","Mahin")
sessionStorage.setItem("Age","23")

//REplacing previous values: mahin ,25
//localStorage.setItem("Name","Evan")
//sessionStorage.setItem("Age","4")

//Remove attributes
//localStorage.removeItem("Name")
//sessionStorage.removeItem("Age")

//Get values
console.log(localStorage.getItem("Name"))


//Cookies


//document.cookie="name=Mahin"

const date= new Date(9999, 0, 1).toUTCString()
document.cookie=`name=Mahin; expires= ${date}`
document.cookie=`age=25; expires=${date}`

console.log(document.cookie)

//Delete cookie

 const pastDate=new Date(1999,0,1).toUTCString()
document.cookie=`name=; expires= ${pastDate}`
console.log(document.cookie)
