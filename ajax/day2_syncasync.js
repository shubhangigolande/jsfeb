//sync===> function execution line by line 

// function addA(){
//     console.log('a is printed')
// }
// function addB(){
//     console.log('b is printed')
// }

// addB()//b is printed
// addA()//a is printed

//==========================================================================================

// sync code create async code for using setTimeOut() method

// function addC(){
//     console.log('c is printed')
// }
// function addD(){
//     setTimeout(function(){
//         console.log('d is printed')
//     },3000)   
// }
// addD()//d is printed  2nd called
// addC()//c is printed   1st called

//==========================================================================================



// function addE(){
//     setTimeout(function(){
//         console.log('user created')
//     },3000)
//     setTimeout(function(){
//         console.log('get id')
//     },2000)
//     setTimeout(function(){
//         console.log('get info by id ')
//     },1000)
// }
// addE()
// output will be
//get info by id
//get id
//user created

// // but the output will not correct, tthe output will right way to create call back hell

// function addF() {
//     setTimeout(function () {
//         console.log('user created')
//         setTimeout(function () {
//             console.log('get id')
//             setTimeout(function () {
//                 console.log('get info by id ')
//             }, 1000)
//         }, 2000)
//     }, 3000)


// }
// addF()
////==========================================================================================


// call beck hell is most tightly coupled code & is not reusable

//promise ----async----sync-----better way--promises

// 3step 
//1=>pending
//2=>resolve
//3=>reject

// using .then(callbackfunction (resolve , reject))

// let prms = new Promise(function (resolve, reject) {
//     let a = 10
//     let b = 20
//     if (a == b) {
//         resolve('hello i m cpmpleted promise')
//     }
//     else {
//         reject('promise is not completed')
//     }
// })
// //consuming the promise
// prms.then(function (a) {
//     console.log(a)
//     },
//     function (b) {
//         console.log(b)
//     })
    //output will be=> promise is not completed


//==========================================================================================

// single .then block  .then().catch().finally()


// let prms1 = new Promise(function (resolve, reject) {
//     let a = 20
//     let b = 20
//     if (a == b) {
//         resolve('hello i m cpmpleted promise')
//     }
//     else {
//         reject('promise is not completed')
//     }
// })
// //consuming the promise
// prms1.then(function (a) {
//     console.log(a)
//     })
//     .catch(function(b){
//         console.log(b)
//     })
//     .finally(function(){
//         console.log('i will be executed')

//     })


//==========================================================================================



// let prms2 = new Promise(function (resolve, reject) {
//     let a = 200
//     let b = 20
//     if (a > b) {
//         resolve('hello i m cpmpleted promise')
//     }
//     else {
//         reject('promise is not completed')
//     }
// })
// //consuming the promise
// prms2.then(function (a) {
//     console.log(a)
//     return "hello"
//     })
//     .then(function(b){
//         console.log(b)

//     })
//     .catch(function(c){
//         console.log(c)
//     })
//     .finally(function(){
//         console.log('i will be executed')

//     })


//==========================================================================================


//Promise.allll()
//Promise.any()
//Promise.race()
//Promise.allSettled()


function usercreate(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('user created')
        },3000)
    })
}
function getid(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('get id')
        },2000)
    })
}
function getuserById(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
        resolve('get info by id')
        },1000)
    })
}
usercreate()
.then(function(a){
    console.log(a)
    return getid()
})
.then(function(b){
console.log(b)
return getuserById()
})
.then(function(c){
console.log(c)
return 'submitted'
})
.then(function(e){
console.log(e)
})
.catch(function(d){
console.log(d)
})
.finally(function(){
    console.log('form submitted')
})

// output
// user created
// get id
// get info by id
// submitted
// form submitte
