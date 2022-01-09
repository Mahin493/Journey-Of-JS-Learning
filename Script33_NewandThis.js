function createUser(name,age){
    return{name:name,age:age,human:true}
}

const user=createUser("Arnob",25)
console.log(user)

const date=new Date()
console.log(date.getDay())

function User(name,age){
    this.name=name
    this.age=age
    this.human=true

}
const user1=new User("Mahin",23)
console.log(user1)

const userfunc=createUser("newone",20)
console.log(userfunc)

class myUser{
    constructor(name,age){
        this.name=name
        this.age=age
        this.human=true
    }
    printname(){
        console.log(this.name)
    }
}

const userme=new myUser("Apu",23)
console.log(userme)
userme.printname()