// let  sarika = {
//     firstName:"sarika",
//     lastName:"pansare",
//     age:25,
//     skills:["python","django","javascript"]
// }
// loop 
// for(let prop in sarika){
//     console.log(prop,sarika[prop])
// }
// let poorva = {
//     firstName:"poorva",
//     lastName:"vyas",
//     age:29,
//     skills:["c","cpp"]
// }
// // Object.values()
// console.log(Object.values(poorva))
// // Object.keys()
// console.log(Object.keys(poorva))
// // Object.entries()
// console.log(Object.entries(poorva))
// program3
let mapA = new Map()
// object keys can only be string data type 
// maps keys can be any data type
console.log(mapA)
// mapA is object 
// object - properties and methods 
// methods - action and return type
console.log(mapA.size)
// set()
mapA.set(1,'admin')
mapA.set(2,'customber')
mapA.set(3,'support')
mapA.set(4,'manager')
console.log(mapA)
console.log(mapA.size)
//get()
console.log(mapA.get(1))
console.log(mapA.get(2))
console.log(mapA.get(3))
console.log(mapA.get(4))
//has()
let a1 = mapA.has(5)
console.log(a1)
//delete()
// mapA.delete(3)
// console.log(mapA)
//clear()
// mapA.clear()
// console.log(mapA)
mapA.forEach(function(v,k){
    console.log(v,k)
})
//values()
for(let  a of mapA.keys()){
    console.log(a)
}
//values()
for(let a of mapA.values()){
    console.log(a)
}
//entties()
for(let [k,v] of mapA.entries()){
    console.log(k,v)
}
let mapB = new Map()
mapB.set(1,"teser")
mapB.set(true,"can drive")
mapB.set("name","chinmay deshpande")
console.log(mapB)


let mapC = new Map([
    [1,'tester'],
    [true ,"can drive"],
    ["name","chinmay deshpande"]
])
console.log(mapC)
