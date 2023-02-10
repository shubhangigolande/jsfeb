let names = ["amol","akash","ram","satish"]
//let a = names[0]
// let b = names[1]
// let c = names[2]
// let d = names[3]

// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)

let [a1,a2,a3,a4] = names
console.log(a1)
console.log(a2)
console.log(a3)
console.log(a4)

//                 0          1
//              0  1  2    0   1  2
let numbers = [[11,22,33],[44,55,66]]
console.log(numbers)

let [[x1,x2,x3],[y1,y2,y3]] = numbers
console.log(x1)
console.log(y2)

// program3 

let info = {
    firstName:"chinmay",
    lastName:"deshpande"
}

// let s1 = info.firstName
// let s2 = info['firstName']
// let s3 = info.lastName
// let s4 = info.lastName
// console.log(s1)
// console.log(s2)
// console.log(s3)
// console.log(s4)

info = {
    firstName:"chinmay",
    lastName:"deshpande"
}

let {firstName,lastName} = info
console.log(firstName)
console.log(lastName)


// program4 
let info3 = {
    firstName:"ninad",
    lastName:"dani",
    parents:{
        mother:"manali",
        father:"mohan"
    }
}

let {firstName:fn,lastName:ln,parents:{mother:mn,father:fna}} = info3
console.log(fn)
console.log(fna)
// program 5
let student = {
    fullName:"chinmay deshpnde",
    age:32,
    skills:["python","django","javascript","css"],
    parent:{
        father:"shirish",
        mother:"kanchan"
    }
}
let {fullName:x11,age:x22,skills:[x33,x44,x55,x66],parent:{father:x77,mother:x88}} = student
console.log(x88)
console.log(x77)
console.log(x44)

// program6

let students = [
    {
        firstName:"samay",
        lastName:"jain"

    },
    {
        firstName:"raj",
        lastName:"kumar"

    }
]

let [{firstName:f11,lastName:l11},{firstName:f22,lastName:l22}] = student
console.log(f11)
console.log(l11)
console.log(f22)
console.log(l22)


