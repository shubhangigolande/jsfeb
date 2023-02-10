
// let a = {}
// let b=[]

// let fname="mayuri"
// console.log(fname)

// let fname1=new String('mayurik')
// console.log(fname1) //

// let rollNo=new Array()
// console.log(rollNo)

let a1 = new Map()
console.log(a1)

let s1 = [1, 2, 3]
let s2 = { a: 1, b: 2 }

//1. set(key ,value)
a1.set(1, 'mayuri')
a1.set(s1, 'arr')
a1.set('lName', 'katwe')
a1.set(true, 'isMarried')
a1.set(s2, 'obj')
console.log(a1)

//retrive
//2. get(key)
console.log(a1.get(true))
//console.log(a1.get([1,2,3])) //arr
console.log(a1.get(s1)) //arr

console.log(a1.get(s2))

//3. has(key)
console.log(a1.has(2))

console.log(a1.has(s1))

//4. delete()
// let w1=a1.delete(true)
// console.log(w1)

// console.log(a1)

//5. clear()
// let d1=a1.clear()
// console.log(d1) //undefined

// console.log(a1)

//6. forEach()
// a1.forEach(function(val,key){
//     console.log(key, val)
// })

// //loop
// for(let key of a1.keys()){
//     console.log(key)
// }

// for(let val of a1.values()){
//     console.log(val)
// }

// for(let [key, val] of a1.entries()){
//     console.log(key,val)
// }

// console.log(a1.keys())
// console.log(a1.values())
// console.log(a1.entries())


let myMap = new Map([[1, "mayuri"], [200, 'rollNumber'], [true, 'isdrive']])
console.log(myMap)

