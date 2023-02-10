
//Map datatype


//SET datatype
//set unique value store
//key value

let mySet = new Set()
console.log(mySet)

//1. add()
mySet.add('mayuri')
console.log(mySet)

mySet.add('rohan')
console.log(mySet)

let newSet = new Set(["mayuri", "rohan"])
console.log(newSet)

let a1 = new Set("vaibhav")
console.log(a1)

//size ==> property

let b1 = "shreeganesh"
let sizeSet = new Set(b1)
console.log(sizeSet.size) //unique value size

let arr = [2, 3, 5, 6, 4, 2, 3] //5
let s1 = new Set(arr)
console.log(s1.size)
console.log(s1)

let f1 = new Set(["mayuri", "jaya", "sathish", "habib"])
console.log(f1.size)

//2. has()

// let setA=new Set([1,2,3])
// let a11=setA.has(1)
// console.log(a11)

// let a12=setA.has(20)
// console.log(a12)

//3. delete()
// let setB = new Set([1, 2, 3, 4, 5, 6])
// let s12 = setB.delete(5)
// console.log(s12)

// console.log(setB)

//4. clear()
// let setB = new Set([1, 2, 3, 4, 5, 6])
// let y12=setB.clear()
// console.log(y12)

// console.log(setB)


//5. forEach()
// let setB = new Set([1, 2, 3, 4, 5, 6])
// setB.forEach((item) => {
//     console.log(item)
// })


//loop
let setB = new Set([1, 2, 3, 4, 5, 6])
for(let item of setB){
    console.log(item)
}
