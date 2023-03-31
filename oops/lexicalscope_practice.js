// lexical scope

// function addition() {
//     let x = 10
//     let y = 20
//     console.log(x + y)
//     function additionB() {
//         let a = 100
//         let b = 50
//         console.log(x + y + a + b)
//         //console.log(s)
//         function additionC() {
//             let s = 10
//             let t = 5
//             console.log(x + y + a + b+s+t)
//         }
//         additionC()
//     }
//     additionB()
// }
// addition()

// //lexical scope
// function addition(){
//     let x=10
//     let y=20
//     console.log(x+y)
//     function additionB(){
//         let a=25
//         let b=45
//         console.log(x+y+a+b)
        
//         function additionC(){
//             let s=4
//             let t=8
//             console.log(x+y+a+b+s+t)

//         }
//         additionC()
//     }
//     additionB()
// }
// addition()

// // program 2

// function greet(){
//     console.log('hello')
//     return "hello chinmay"
//     console.log('bye chinmay')
// }
// let a=greet()
// console.log(a)

// // // program 2b 

// function calculater(x,y){
//     return function(){
//         console.log(x+y)
//     }
// }
// let r=calculater(12,1)
// console.log(r)

// function calculater1(){
//     return [12,32,45]
// }
// let r1=calculater1()
// console.log(r1)

// function calculater2(){
//     return {
//         firsName:"shubhangi",
//         lastName:"golande"
//     }
// }
// let r2=calculater2()
// console.log(r2)

// // // closures

// function additionE(){
//     console.log('hello')
//     return 8+9
//     console.log('bye')
// }
// let q1=additionE()
// console.log(q1)

// function additione(){
// let a=100
// let b=50
// return function(){
//     console.log(a+b)
// }
// }
// let w=additione()
// console.log(w)


// // actual difference between arrow function and function expression

// // function declaration
// function add(x, y) {
//     return x + y
// }
// let q21 = add(10, 5)
// console.log(q21)

// // function expression

// let add2 = function (x, y) {
//     return x + y
// }
// let q2 = add2(12, 6)
// console.log(q2)

// // arrow function

// // let add3 =  (x,y)=>{
// //     return x + y
// // }
// // let q3 = add3(12,6)
// // console.log(q3)

// let add3 = (x, y) => x + y
// let q3 = add3(12, 6)
// console.log(q3)


// let k = [11, 22, 33, 44]

// //[13,24,35,46]

// let q33 = k.map(el => el + 2)
// console.log(q33)

// let q44 = k.filter(el => el > 15)
// console.log(q44)


// //==================================================================================================

var firstName = "vijeet"
var lastName = "dani"

// let info ={
//     firstName:"shubhangi",
//     lastName:"golande",
//     age:32,
//     rollno:12,
//     display(){
//         console.log(this)
//         console.log(info.firstName+info.lastName)
//         function display2(){
//             console.log(this)
//             console.log(this.firstName+this.lastName)
//         }
//         display2()
//     }

// }
// info.display()

//==================================================================================================


//  let info1 = {
//     firstName: "chinmay",
//     lastName: "deshpande",
//     age: 12,
//     rollNo: 23,
//     display: function () {
//         console.log(this) // info
//         console.log(info1.firstName + info1.lastName)

//         let display2 = () => {
//             console.log(this) //info
//             console.log(this.firstName + this.lastName)
//         }
//         display2()
//     }
// }
// info1.display()

//==================================================================================================

// let info = {
//     firstName: "ansh",
//     lastName: "golande",
//     age: 12,
//     rollNo: 23,
//     display: ()=> {
//         console.log(this) // window
//         console.log(this.firstName + this.lastName)
//         let display2 = () => {
//             console.log(this) //window
//             console.log(this.firstName + this.lastName)

//         }
//         display2()
//     }
// }
// info.display()

// let y = 100
// console.log(window.y)
// var y7 = 1000
// console.log(window.y7)