
// let student = {
//     firstName: "mayuri",
//     lastName: "Katwe",
//     skills: ["java", "js", "python", "cypress"],
//     age: 25,
//     isDoingJob: true
// }

//retrive
//object.keyName=value

// console.log(student.age) //25

//update
// student.isDoingJob=false
// console.log(student)

// console.log(student.skills.length)
// student.skills="selenium"
// console.log(student)

// student.skills.push('selenium')
// console.log(student)

//add
// student.language="Marathi"
// console.log(student)

// //delete
// delete student.age
// console.log(student)


//loop
// let student = {
//     firstName: "mayuri",
//     lastName: "Katwe",
//     skills: ["java", "js", "python", "cypress"],
//     age: 25,
//     isDoingJob: true
// }


// let rollNo=[12,34,56,78,55,44,33,22]
// for(let i=0;i<rollNo.length;i++){
//     console.log(rollNo[i])
// }

//for keys 
// for(let key in student){
//     console.log(key)
// }

// //for values
// for(let key in student){
//     console.log(student[key])
// }

//keys and value
// for(let key in student){
//     console.log(key, student[key])
// }

//2 way loop

// for(let key of Object.keys(student)){
//     console.log(key)
// }

// for(let val of Object.values(student)){
//     console.log(val)
// }

// for (let [a, b] of Object.entries(student)) {
//     console.log(a, b)
// }

//===========================================
// let student = {
//     firstName: "mayuri",
//     lastName: "Katwe",
//     skills: ["java", "js", "python", "cypress"],
//     age: 25,
//     isDoingJob: true
// }

// for(let key in student){
//     console.log(typeof key)
// }

//Map => datatype

let myMap = new Map()
console.log(myMap)

//to add element
//1. set()
myMap.set('firstName','mayuri')
myMap.set(1,'marathi')
myMap.set(true,'isStudent')
myMap.set(2000,20)
console.log(myMap)

//retrive
//get()
// let a1=myMap.get(1)
// console.log(a1)

// let a2=myMap.get(2000)
// console.log(a2)

// //has()
// let s1=myMap.has(true)
// console.log(s1)

// let s2=myMap.has('fullName')
// console.log(s2)

// //delete()
// let r1=myMap.delete(1)
// console.log(r1)

// console.log(myMap)

//clear()
// myMap.clear()
// console.log(myMap)

//set(), get(), delete(), clear(),has()

//property => size
console.log(myMap.size)