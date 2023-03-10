
// let fn="mayuri"
// console.log(typeof fn)//string

// let aa='10'
// console.log(typeof aa)

// let ab=true
// console.log(typeof ab)

// let ac=[1,2,3,4]
// console.log(typeof ac) //object

//function

// let a=10
// let b=20
// console.log(a+b)
// console.log(a-b)

// let s=2
// let v=1
// console.log(s+v)
// console.log(s-v)

// let p=20
// let q=2
// console.log(p+q)
// console.log(p-q)

// function add(a,b){
//     console.log(a+b)
//     console.log(a-b)
// }
// add(20,3)
// add(200,300)
// add(10,3)
// add(20,3)

//1 function declaration

// function add(a, b) {
//     return a + b
// }
// let y1 = add(10, 2)
// console.log(y1)


// let add1 = function (a, b) {
//     return a + b
// }
// console.log(add1) //print the function
// let y2 = add1(2, 1)
// console.log(y2)

// let add2 = (x, y) => {
//     return x + y
// }
// let y4 = add2(30, 2)
// console.log(y4)

// let add3=(x,y)=>x+y

//call by value
// let a=10
// console.log(a) //10
// let b=a
// console.log(b) //10

// a=34
// console.log(a) //34
// console.log(b) //10

// //call by reference

// let arr=[2,3,4,5,6,7]
// console.log(arr) //[2,3,4,5,6,7]

// let arr2=arr
// console.log(arr2) ///[2,3,4,5,6,7]

// arr[0]=200
// console.log(arr) //[200,3,4,5,6,7]
// console.log(arr2) //[200,3,4,5,6,7]

//1. string as a parameter and string as return type
// function greeting(a){
//     return a
// }
// console.log(greeting('Welcome to minskole!!!'))

//2. array as parameter and array as return type

// let rollNo=[11,22,33,44]
// function arraPara(arr){
//     //let arr=rollNo
//     arr[0]=500
//     return arr
// }
// console.log(rollNo)  //[11,22,33,44]
// let u11=arraPara(rollNo)
// console.log(u11) //[500,22,33,44]
// console.log(rollNo)//[500,22,33,44]

//3. object as parameter and object as return type

let person = {
    fn: "mayuri",
    ln: "katwe"
}
function objPara(obj) {
    //let obj=person
    obj.fn = "vaibhav"
    return obj
}
console.log(person) //mayuri katwe
let result=objPara(person)
console.log(result)//vaibhav katwe
console.log(person) //vaibhav katwe

