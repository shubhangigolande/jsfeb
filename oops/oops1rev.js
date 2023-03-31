//Object literals

// let mayuri = {
//     firstName: "Mayuri",
//     lastName: "Katwe",
//     age: 25,
//     rollNumber: 36,
//     skills: "Javascript"
// }

//add
// mayuri.language="Marathi"
// console.log(mayuri)

// mayuri['language']="hindi"
// console.log(mayuri)

// //update
// mayuri.age=36
// console.log(mayuri)

// //retrive
// console.log(mayuri.firstName)

// //delete
// delete mayuri.skills
// console.log(mayuri)

// let vaibhav = {
//     firstName: "Vaibhav",
//     lastName: "Katwe",
//     age: 20,
//     rollNumber: 34,
//     skills: "guitarist"
// }

// let ram={
//     firstName: "ram",
//     lastName: "Katwe",
//     age: 20,
//     rollNumber: 34,
//     skills: "guitarist"
// }

//100 => 10 object

//==========================================================
//function constructor
//Es6 class ====> moden js=> Es6 2015
//object.create()

//1. function constructor

// function Human(firstName, lastName, age, rollNo, skill) {
//     this.firstName = firstName
//     this.lastName = lastName
//     this.age = age
//     this.rollNo = rollNo
//     this.skill = skill
// }

// let Mayuri=new Human("mayuri","katwe",25,35,"java")
// console.log(Mayuri)

// let vaibhav=new Human("vaibhav","joshi",33,67,'python')
// console.log(vaibhav)


//===========================================================

//2. ES6 class

//with constructor //without constructor

//without constructor
// class Person {
//     firstName = "Mayuri"
//     lastName = "katwe"
//     age = 25
//     rollNo = 35
//     skill = "SQL"
// }
// let Sham = new Person()
// console.log(Sham)

// let sita=new Person()
// console.log(sita)

//with constructor

// class Person {
//     constructor(firstName, lastName, age, rollNo, skill) {
//         this.firstName = firstName
//         this.lastName = lastName
//         this.age = age
//         this.rollNo = rollNo
//         this.skill = skill
//     }
// }
// let Raviraj=new Person("Raviraj","Dhale",33, 43, "HTML")
// console.log(Raviraj)

// let manjiri=new Person('Manjiri','Kshatriya',45,90,'CSS')
// console.log(manjiri)

//==============================================

//object.create()

// let mayuri=Object.create({})
// console.log(mayuri)
// mayuri.firstName="Mayuri"
// mayuri.lastName="Katwe"
// mayuri.age=35
// mayuri.rollNo=25
// mayuri.skill="java"
// console.log(mayuri)

//===================================================================

// function Person(fn, ln, ag, rn, sk) {
//     this.firstName = fn
//     this.lastName = ln
//     this.ag = ag
//     this.skill = sk
//     this.rollNo = rn
//     this.display = function () {
//         console.log(this.firstName + this.lastName)
//     }
// }

// let Dinga=new Person("Dinga","sharma",23,35,"Java")
// console.log(Dinga)

// let Pinga=new Person("Pinga","Kumar",45,90,'Python')
// console.log(Pinga)

// Problem==>display method getting add with all object which is created with the help of function constructor

//====================================================================================================

//parent.prototype==object._proto_


function Person(fn, ln, ag, rn, sk) {
    this.firstName = fn
    this.lastName = ln
    this.ag = ag
    this.skill = sk
    this.rollNo = rn
}

Person.prototype.display = function () {
    console.log(this.firstName + this.lastName)
}

let Sayali = new Person("Sayali", "Rao", 12, 24, "Math")
console.log(Sayali)

let Priya = new Person("Priya", "Raut", 34, 56, "Java")
console.log(Priya)

console.log(Person.prototype == Sayali._proto_)

Sayali.display()
