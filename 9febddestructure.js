
let arr  = [11,22,33,44,55]
// console.log(arr[0]) // 11
// let a = arr[0]
// let b = arr[1]
// let c = arr[2]
// let d = arr[3]
// let e = arr[4]
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(e)
// destructure
let numbers = [11,22,33]
let [a1,a2,a3] = numbers
console.log(a1)
console.log(a2)
console.log(a3)
let names = ["poorva","mayuri","abhisha"]
let [a11,a22] = names
console.log(a11)
console.log(a22)
// program2
//                  0          1
//               0  1  2    0  1  2
let numberss = [[11,22,33],[44,55,66]]
let [[x1,x2,x3],[x4,x5,x6]] = numberss
console.log(x3)
console.log(x5)
// program 3
let info  = {
    firstName:"amol",
    lastName:"rao",
    age:33
}
let {firstName,lastName,age} = info
console.log(firstName)
console.log(lastName)
console.log(age)
let vehicle = {
    color:"red",
    type:"sedane"
}
let {color:c1,type:t2} = vehicle
console.log(c1)
console.log(t2)
// program 4
let family = {
    firstName:"chinmay",
    lastName:"deshpande",
    parent:{
        mother:"kanchan",
        father:"shirish"
    }
}
let {firstName:f1,lastName:l1,parent:{mother:m1,father:f2}} = family
console.log(f1)
console.log(f2)
console.log(m1)
console.log(l1)
let state = {
    MH:{
        city:"pune",
        city2:"mumbai"
    },
    MP:{
        city:"bhopal",
        city2:"indore"
    }  
}
let {MH:{city:c11,city2:c22},MP:{city:c33,city2:c44}} = state 
console.log(c33)
//program 5
let stud = {
    firstName:"mayuri",
    lastName:"rao",
    age:34,
    skills:["sql","testing","js"]
}
let  {firstName:ff1,lastName:ff2,age:aa3,skills:[rr1,rr2,rr3]} = stud
console.log(rr2)
console.log(aa3)
// program 6
let students = [
    {
        firstName:"mayuri",
        lastName:"rao",
        age:34 
    }
    ,
    {
        firstName:"amol",
        lastName:"rao",
        age:32
    }
]
let [{firstName:q11,lastName:q22,age:q33},{firstName:q44,lastName:q55,age:q66}] = students
// console.log(b1)
// console.log(b2)

console.log(q11)
console.log(q22)
console.log(q33)
console.log(q44)
console.log(q55)
console.log(q66)