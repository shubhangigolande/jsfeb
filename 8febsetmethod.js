let names = ["chinmay","chinmay","ram", "satish"]
console.log(names)
let setA = new Set()
console.log(setA)
//Object 
//--- property and method
//action and return type
console.log(setA.size)
setA.add(22)
setA.add(23)
setA.add(21)
setA.add(24)
console.log(setA)
//console.log(setA[0])
for(let item of setA){
    console.log(item)
}
console.log(setA)
let q1 = setA.has(22)
console.log(q1)
let q2 = setA.delete(55)
console.log(q2)
console.log(setA)
setA.clear()
console.log(setA)
// size , add() , delete() , has() , clear()
// keys() , values() , entries()
//                    0       1       2          3
let setB = new Set(["apple","mango","banana","grapes","banana"])
console.log(setB)
setB.forEach(function(el){
    console.log(el)
})
// keys() , values() , entries()
// let a = setB.keys()
// console.log(a)
// console.log(setB)
// console.log(a.next().value)
// console.log(a.next().value)
// console.log(a.next().value)
// console.log(a.next().value)
// setB
console.log(setB)
let a = setB.values()
console.log(a)
// console.log(a.next().value)
// console.log(a.next().value)
// console.log(a.next().value)
// console.log(a.next().value)
for(let item of a){
    console.log(item)
}
let b = setB.values()
console.log(b)
// b.next()
// b.next()
for(let item of b){
    console.log(item)
}
let setC = new Set ([
    {
        firstName:"chinmay",
        lastName:"deshpande"
    },
    {   
        firstName:"amol",
        lastName:"rao"
    }
])
console.log(setC.values())

//console.log(setC.entries())
// // example
// for(let [{firstName},{lastName}] of setC.entries()){
//     console.log(firstName,lastName)
// }
// 
