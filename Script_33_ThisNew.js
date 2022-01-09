function createUser(name,age){
    return {name:name,age:age,human:true}
}

const cuser=createUser("Mahin",23)
console.log(cuser)

//const date=new Date()
//console.log(date.getUTCDate())
//This keyword
function User(name,age){
   // return {name:name,age:age,human:true}
   this.name=name;
   this.age=age;
   this.human=true
}

const usern=new User("Mahin",24)
console.log(usern)

//Class 

class Myuser{
    constructor(mname,mage){
        this.mname=mname
        this.mage=mage
        this.mhuman=true
    }

    printname(){
        console.log(this.mname)
    }
}

const muser=new Myuser("Mahin",23)
const muser2=new Myuser("Joy",24)
//console.log(muser)
//console.log(muser2)
muser2.printname()