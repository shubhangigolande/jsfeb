//actual differance btw arrow function and function expression


//function declaration
//function expresion
//arrow function


// function add(a, b) {
//     console.log(a + b)
// }

// let add1=()=>{
//     console.log('hello')
// }

// let add2=function(){
//     console.log('bye')
// }


// let x=10 //local
// console.log(x) //10

// console.log(window.x) //undefined

// //window

// var y=20 //global
// console.log(y) //20
// console.log(window.y)


// let info = {
//     firstName: "Mayuri",
//     lastName: "Katwe",
//     age: 25,
//     display: function () {
//         console.log(this == info) //true
//         console.log(this.firstName + this.lastName) //mayuri katwe

//         let greet = function () {
//             console.log(this == window) //true
//             console.log(this.firstName + this.lastName) //NaN
//         }
//         greet()
//     }
// }
//console.log(info.display)//print 
//info.display()//call

//console.log(undefined+undefined)//NaN

//===========================================================
// var firstName="shamal"
// var lastName="jha"
// let info = {
//     firstName: "Mayuri",
//     lastName: "Katwe",
//     age: 25,
//     display: function () {
//         console.log(this == info) //true
//         console.log(this.firstName + this.lastName)  //MayuruiKatwe

//         let greet = function () {
//             console.log(this == window) //true
//             console.log(this.firstName + this.lastName) //ShamalJha
//         }
//         greet()
//     }
// }

//info.display()

//================================================

// var firstName="shamal"
// var lastName="jha"
// let info = {
//     firstName: "Mayuri",
//     lastName: "Katwe",
//     age: 25,
//     display: function () {
//         console.log(this == info) //true
//         console.log(this.firstName + this.lastName)  //MayuruiKatwe

//         function greet () {
//             console.log(this == window) //true
//             console.log(this.firstName + this.lastName) 
//         }
//         greet()
//     }
// }
// info.display()

//==============================================================

// let info = {
//     firstName: "Mayuri",
//     lastName: "Katwe",
//     age: 25,
//     display: function () {
//         console.log(this == info) //true
//         console.log(this.firstName + this.lastName)  //MayuriKatwe

//         let greet = () => {
//             //parent's this scope
//             console.log(this == info) 
//             console.log(this.firstName + this.lastName) //MayuriKatwe
//         }
//         greet()
//     }
// }
// info.display()

//=============================================================
let info = {
    firstName: "Mayuri",
    lastName: "Katwe",
    age: 25,
    display: () => {
        console.log(this == window) //true
        console.log(this.firstName + this.lastName)  //MayuriKatwe

        let greet = () => {
            //parent's this scope
            console.log(this == window)
            console.log(this.firstName + this.lastName) //MayuriKatwe
        }
        greet()
    }
}
info.display()




// let info={
//     fn:"mayuri"
// }

// info.fn

// window={
// y:20
// }

