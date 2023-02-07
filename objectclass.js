// Object literal
let amol = {
    fullName:"amol",
    lastName:"rao",
    age:23,
    skills:["python","django"]
}

let chinmay = {
    fullName:"chinmay",
    lastName:"deshpande",
    age:29,
    skills:["python3","django3"]
}
//40 objects - 160
// Setting the value outside the class
class Person {
    firstName = undefined
    lastName = undefined
    age = undefined
    rollNo = undefined
}
let amolB =  new Person() 
console.log(amolB)

amolB.firstName = "amol"
amolB.lastName = "rao"
amolB.age = 22
amolB.rollNo = 66
console.log(amolB)

// Setting the value at the time on object creation

class PersonD {
    constructor(fn,ln,ag,rollNo){
        this.firstName = fn
        this.lastName = ln
        this.age = ag
        this.rollNo = rollNo
    }
}

let amolC = new PersonD("amol","rao",34,90)
let chinmayC = new PersonD("chinmay","deshpande",33,89)

console.log(amolC)
console.log(chinmayC)

chinmayC.city = "nagpur"
console.log(chinmayC)
console.log(amolC)

class PersonE {
    setFirstName(fn){
        this.firstName = fn
    }
    setlastName(ln){
        this.lastName = ln
    }
    setAge(ag){
        this.age = ag
    }
    setRollNo(roll){
        this.rollNo = roll
    }
}

let amolD  = new PersonE()
console.log(amolD)



amolD.setFirstName("amolD")
amolD.setlastName("rao")
amolD.setRollNo(23)
amolD.setAge(33)
console.log(amolD)










// operations with objects
// console.log(amol)
// // retirve 
// console.log(amol.firstName)
// // update 
// amol.firstName = "amol r"
// // delete
// delete amol.lastName
// // add
// amol.city = "pune"