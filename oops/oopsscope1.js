
// //Actual diff between let var & const
// //let
// let x=10
// console.log(x)//10

// //Update
// x=20
// console.log(x)//20 updated value

// //================================================

// //const
// const x1=90
// console.log(x1)//90

// //x1=22
// //console.log(x1)//TypeError: Assignment to constant variable.

// //================================================

// // var
// var a=52
// console.log(a)//52
// a=30
// console.log(a)//30 //updated value

//===============================================

//program 1
//{}=> block
//let & const keyword is block scope variable

// {
//     let b=15
//     console.log(b)//15
// }
// console.log(b)//ReferenceError: b is not defined


//program 2
// let y=150
// {
// let y=500
// console.log(y)//500
// }
// console.log(y)//150


//===============================================

//program 3
// let x1=900
// {
//     console.log(x1)//900
//     x1=200
//     console.log(x1)//200
// }
// console.log(x1)//200

//===============================================

// //program 4
// let z=500
// {
//     console.log(z)//ReferenceError: Cannot access 'z' before initialization
//    let z=300
//     console.log(z)//300
// }
// console.log(z)//500


//===============================================

//program 5
// {
//     const p1=400

// }
// // console.log(p1)//ReferenceError: p1 is not defined

// // let y
// // console.log(y)//undefined

// //===============================================


// //program 6
// const k=600
// {
//     console.log(k)//600
//     k=700
//    console.log(k)//TypeError: Assignment to constant variable.
// }
// console.log(k)

//===============================================

//program 7

// {
//     var a=90
// }
// console.log(a)//90

//===============================================

//let, const have block scope
//var dont have block scope
// var having function scope



//===============================================


// //program 8
// var num=100
// console.log(num)//100
// function add(){
//     var num =200
//     console.log(num)//200
// }
// console.log(num)//100
// add()
// console.log(num)//100

//===============================================

var num=100 // updated 200
console.log(num)//100
function add(){
    num = 200
    console.log(num)//200
}
console.log(num)//100
add()
console.log(num)//200


//===============================================
//program 9

function init(){
    var t1=999
    console.log(t1)//999
}
init()
console.log(t1)//ReferenceError: t1 is not defined

