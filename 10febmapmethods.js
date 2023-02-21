// // //Set => datatype

// // //collection of unique value

// // let mySet = new Set()
// // console.log(mySet)

// // //value add
// // //1. add()
// // mySet.add("mayuri")
// // console.log(mySet)
// // mySet.add('gaurav')
// // console.log(mySet)
// // mySet.add('mayuri')
// // console.log(mySet)
// // mySet.add('sathish')
// // console.log(mySet)

// // //add value with the help of set constructor
// // let newSet=new Set(["a","b","c","d",'a'])
// // console.log(newSet)

// // //2. delet()
// // // let y1=newSet.delete('b')
// // // console.log(y1) //true
// // // console.log(newSet)

// // //3. has()
// // // let y2=newSet.has('a')
// // // console.log(y2)//T

// // // let y3=newSet.has('z')
// // // console.log(y3)//F

// // //4. forEach()
// // // newSet.forEach((el)=>{
// // //     console.log(el)
// // // })

// // //==========================================
// // //for
// // // for(let val of mySet){
// // //     console.log(val)
// // // }

// // // for(let val of newSet){
// // //     console.log(val)
// // // }

// // //==================================
// // //keys()

// let newSet = new Set(["a", "b", "c", "d", 'a'])
// // let r1=newSet.keys()
// // console.log(r1.next().value)
// // console.log(r1.next().value)
// // console.log(r1.next().value)
// // console.log(r1.next().value)

// //values()
// let r2 = newSet.values()
// console.log(r2)
// console.log(r2.next().value)
// console.log(r2.next().value)
// console.log(r2.next().value)
// console.log(r2.next().value)

// //entries()
// let r3 = newSet.entries()
// console.log(r3) //[value , value]


//======================================================

// let rollNumber = [11, 22, 33, 44, 55]
// console.log(rollNumber[4])
// let a1 = rollNumber[0]
// let a2 = rollNumber[1]
// let a3 = rollNumber[2]
// let a4 = rollNumber[3]
// let a5 = rollNumber[4]

// console.log(a1)
// console.log(a2)
// console.log(a3)
// console.log(a4)
// console.log(a5)

//Destructoring

//1. destructure of array
// let [e1, e2, e3, e4, e5] = rollNumber
// console.log(e1) //11
// console.log(e2) //22
// console.log(e3) //33


// console.log(e5) //55

//2. nested array

//          0  1  2    0   1   2      0    1     2
let num = [[6, 7, 9], [77, 66, 99], [100, 200, 300]]
//             0         1                2   

console.log(num[1][1]) //66

let [[a,b,c],[d,e,f],[g,h,i]] = num
console.log(e) //66
console.log(h) //200
