//class 

// let mayuri={
//     firstName:"mayuri",
//     age:25
// }

// let rohan={
//     firstName:"rohan",
//     age:33
// }

// let amol={
//     firstName:"amol",
//     age:12
// }

//class==> Es6 class
//without constructor
//with constructor
//by using function/method
//set and key keyword

//1. without constructor

// class Person {
//     firstName = "mayuri"
//     lastName = "katwe"
//     age = 25
//     display = function () {
//         console.log(this.firstName + this.lastName)
//     }
// }
// let mayuri = new Person()
// console.log(mayuri)

// let vaibhav=new Person()
// console.log(vaibhav)


//Setting object property outside of class
// class Person {
//     firstName =undefined
//     lastName = undefined
//     age = undefined
//     display = function () {
//         console.log(this.firstName + this.lastName)
//     }
// }

// let ram=new Person()
// console.log(ram)
// ram.firstName="Ram"
// ram.lastName="kumar"
// ram.age=36
// ram.display()
// console.log(ram)


// let sham=new Person()
// console.log(sham)
// sham.firstName="sham"
// sham.lastName="puri"
// sham.age=56
// console.log(sham)

//===================================================
//with constructor

// class PersonA {
//     constructor(firstName, lastName, age) {
//         this.firstName = firstName
//         this.lastName = lastName
//         this.age = age
//     }
//     display () {
//         console.log(this.firstName + this.lastName)
//     }
// }
// let sathish = new PersonA("Sathish", "kumar", 45)
// console.log(sathish)
// sathish.display()

// let Amol=new PersonA("Amol","sharma",34)
// console.log(Amol)
// Amol.display()

//================================================================

//by using function
// class Person{
//     setFirstName(fn){
//         this.firstName=fn
//     }
//     setLastName(ln){
//         this.lastName=ln
//     }
//     setAge(ag){
//         this.age=ag
//     }
//     getFirstName(){
//         return this.firstName
//     }
//     getLastName(){
//         return this.lastName
//     }
//     getAge(){
//         return this.age
//     }
// }
// let mayuri=new Person()
// console.log(mayuri)

// mayuri.setFirstName("mayuri")
// mayuri.setLastName("katwe")
// mayuri.setAge(25)
// console.log(mayuri)

// console.log(mayuri.getFirstName())
// console.log(mayuri.getLastName())
// console.log(mayuri.getAge())


//==================================================

//4. by using set and get keyword
