// sync code
//async code

//program1
// function additionA(){
//     console.log('A is printed')
// }
// function additionB(){
//     console.log('B is printed')
// }
// additionB()//B is printed 1st print
// additionA()//A is printed 2nd print

// first print additionB() and then additionA()
//bcz it is sync code(js is sync )
//it works sequentially step by step

//==================================================================

//program 2

// function additionC(){
//     setTimeout(function(){
//         console.log('printed c')
//     },2000)
// }
// function additionD(){
//     setTimeout(function(){
//         console.log('printed D')
//     })
// }
// additionC()//printed D 1st print
// additionD()//printed c 2nd print


//==================================================================

//program 3
//async code
// function additionE(){
//     setTimeout(function(){
//         console.log('user created')
//     },3000)
//     setTimeout(function(){
//         console.log('get id')
//     },2000)
//     setTimeout(function(){
//         console.log('get info by id')
//     },1000)
// }
// additionE()//output will be 
//1-> get info by id
//2->get id
//3->user created
// this code will be async code it's not correct output,so thats why we are using Async code execute syncrhonously

//program 4 
//Async code execute Sync code thatis called (call back hell)


// function additionF() {
//     setTimeout(function () {
//         console.log('user created')
//         setTimeout(function () {
//             console.log('get id')
//             setTimeout(function () {
//                 console.log('get info by id')
//             }, 1000)
//         }, 2000)
//     }, 3000)
// }
// additionF()// output will be 
// 1=> user created
// 2=>get id
// 3=>get info by id
// this program will not perfectly getting & in this program if given middle code get but it not yet.
// this program is better way to create promises
//promise is 3 step
//1 st => pending
//2 nd =>resolve
//3 rd=>reject

// let pro = new Promise(function (resolve, reject) {
//     let a = 10
//     let b = 20
//     if (a == b) {
//         resolve('hello i completed promise')
//     }
//     else {
//         reject('promise is not completed')
//     }
// })
// //consuming the promise
// pro.then(function (a) {
//     console.log(a)
// }, function (b) {
//     console.log(b)//promise is not completed
// })
//===========================

//program 5

// let pro = new Promise(function(resolve,reject){
//     let city='baramati'
//     if(city.includes('b')){
//         resolve('b is present')
//     }
//     else{
//         reject('b is not present')
//     }
// })
// pro.then(function(a){
// console.log(a)
// },function(b){
//     console.log(b)//b is present
// })

// //or
// let pro1 = new Promise(function(resolve,reject){
//     let city='baramati'
//     if(city.includes('p')){
//         resolve([56,35,44])
//     }
//     else{
//         reject([-13,-75,-85])
//     }
// })
// pro1.then(function(a){
// console.log(a[2])
// },function(b){
//     console.log(b[1])//-75
// })

//===========================================

//program 6

let prog=new Promise(function(resolve,reject){
    let city='pune'
    if(city.includes('p')){
        resolve([11,22,33,44])
    }
    else{
        reject([-24,-30,-22,-5])
    }
})
prog
.then(function(A){
console.log(aa[3])
})
.catch(function(bb){
    confirm.length(bb[1])
})
.finally(function(){
    console.log('i will executed')
})


//===========================================

//program 7

let pro11=new Promise(function(resolve,reject){
    let a=10
    let b=20
    if(a>b){
        resolve(' a is greater')
    }
    else{
        reject('b is greater')
    }
})
//consuming promise

pro11.then(function(v){
console.log(a)
return 'hello'
})
.then(function(b){
    console.log(b)
})
.catch(function(cc){
    console.log(cc)
})
.finally(function(){
    console.log('i will execute')
})


//===========================================

//program 8

// let aa= new Promise(function(resolve,reject){
//     let a=100
//     let b=10
//     let c=10
//     if(a>b){
//         resolve('a is greater')
//     }
//     else if(b>c){
//         resolve('b is greater')
//     }
//     else{
//         reject('c is greater')
//     }
// })

// aa.then(function(a){
//     console.log(a)
//     // return 'hello'
// })
// // .then(function(b){
// //     console.log(b)
// //     // return 'hi'
// // })
// // .then(function(c){
// //     console.log(c)
// // })
// .catch(function(d){
//     console.log(d)
// })
// .finally(function(){
//     console.log('finally great')
// })



