// object literal
let chinmay = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:27,
    rollNo:34
}

let amol = {
    firstName:"amol",
    lastName:"rao",
    age:30,
    rollNo:33
}


// program 1
// function constructor 
function Person(fn,ln,ag,rollNo){
    this.firstName  = fn
    this.lastName = ln
    this.age  = ag
    this.rollNo = rollNo
}

let sarika = new Person("sarika","pansare",25,44)
let poorva = new Person("poorva", "vyas" , 29 ,33)
let abhisha = new Person("abhisha", "burande" , 28 ,37)
console.log(sarika)
console.log(poorva)

// es6 class 

class PersonB {

    constructor(fn,ln,ag,rollNo){
        this.firstName = fn
        this.lastName = ln
        this.age  = ag
        this.rollNo = rollNo
    }

}

let sarikB = new PersonB("sarika","pansare",34,56)
let poorvaB = new PersonB("poorva","vyas",34,77)

console.log(sarikB)
console.log(poorvaB)

// Object.create()

let sarikaC = Object.create({})
console.log(sarikaC)

sarikaC.firstName = "sarika"
sarikaC.lastName = "pansare"
sarikaC.age = 25
sarikaC.rollNo = 55
console.log(sarikaC)

//-----------------------------------------

// Object literal 

let vehicle = {
    color:"red",
    type:"sedane"
}

// function constructor 

function Vehicle(cl,ty){
    this.color = cl
    this.type  = ty
}
let audi = new Vehicle("green","SUV")
console.log(audi.color)
console.log(audi.type)

// es6 class

class VehicleB {
    constructor(cl, ty){
        this.color = cl
        this.type = ty
    }
}

let rama = new VehicleB("blue","sedane")
console.log(rama.color)
console.log(rama.type)

// object.create()

let skoda = Object.create({})
console.log(skoda)
skoda.color = "white"
skoda.ty = "sedane"



// Object.create() method





// 500 ----  2000 lines





// CRUD
// // retrive  (dot notation and bracket notation)
// console.log(chinmay.firstName)
// console.log(chinmay['firstName'])
// // update (dot notation and bracket notation)
// chinmay.firstName = "ram"
// chinmay['firstName'] = "ramesh"
// console.log(chinmay)
// // add (dot notation and bracket notation)
// chinmay.city = "pune"
// chinmay['language'] = "hindi"
// console.log(chinmay)
// // delete (dot notation and bracket notation)
// delete chinmay.firstName
// delete chinmay['lastName']
// console.log(chinmay)
