// // 1. reverse  string

// let myname = 'krishna'

// let reversedstring = ''

// for (let i = myname.length-1; i >= 0; i--){
//     //reversedstring = myname[i] + reversedstring    //  krishna
//     reversedstring = reversedstring + myname[i]       // anhsirk       ( when intilization from last of string element)
// }
// console.log(reversedstring)


// for(let i=0;i<myname.length;i++){
//     reversedstring = myname[i]+ reversedstring 
// }
// console.log(reversedstring)
//--------------------------------------------------------------------------------------------------------------

// 2. count vowels(a,e,i,o,u) in above string
// let myname = 'krishna'
// let count = 0
// for (let i = 0; i < myname.length; i++){
//     if(myname[i]== 'a' || myname[i]== 'e' || myname[i]== 'i' || myname[i]== 'o' || myname[i]== 'u' )
//     { count = count + 1 }
// }
// console.log(count)          //   2
// .....................................................................................

//Q. collect even  numbers

// let arr = [1,2,3,4,5,6,7,8,9,10]
// let evenNo = [ ]
// // By for loop

// for(let i =0; i < arr.length; i++){

//     if((arr[i]%2 == 0)){
//         evenNo.push(arr[i])
//     }
// }
// console.log(evenNo)        // [ 2, 4, 6, 8, 10 ]
//------------------------------------------------------------------
// By Using Method

// arr.filter((el)=>{
//     if((el%2) == 0){
//         evenNo.push(el)
//     }
// })
// console.log(evenNo)     // [ 2, 4, 6, 8, 10 ]


//===========================================================================================================
// problem ----------
// // separate out the even and odd numbers from the arrey

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let evenarr = []
// let oddarr = []
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 == 0) {
//     evenarr.push(arr[i])
//   }
//   else {
//     oddarr.push(arr[i])
//     // console.log(arr[i])

//   }
// }

// console.log(evenarr)     //[ 2, 4, 6, 8, 10 ]
// console.log(oddarr)   // [ 1, 3, 5, 7, 9 ]

//----------------------------------------------------------------------------------------------

// problem ------------
// separate out  alphabets and numbers 

// let sss = ['a',2,'d',6,'y','j',8,55,'e','k']

// let alphaarr = []
// let numarr = []

// for(let i=0; i<sss.length; i++){
//   if(sss[i] === Number(sss[i])){
   
//     numarr.push(sss[i])
//   }
//   else{
//     alphaarr.push(sss[i])
//   }
// }
// console.log(alphaarr)  // [ 'a', 'd', 'y', 'j', 'e', 'k' ]  
// console.log(numarr)   // [ 2, 6, 8, 55 ]

// .....................................................................................

//Problem = Remove string first and last characters(substring) from given string

// let kk = 'shrikrishnak'
// let rkk = " "

// for (let i = 0; i < kk.length; i++){

//     if ((i != 0)&&(i != 1)&&(i != 2)&&(i != 3)&&(i != kk.length-1)){                                 // kk[i] used when perform on elements and index value(i) used when we perform on index 

//         //rkk = kk[i] + rkk
//         rkk = rkk + kk[i] 

//     }
// }
// console.log(rkk)                     //  krishna

// Note = in this if condition think more (how its work) 

// ................................................................................................
//Problem = Peackup max and min values from array

let arr = [1,2,3,66,22,34,78,45,-3,0,88]

//let max = arr[0]
let max = 0
let min = 0//arr[5]     // 1

for (let i = 0; i < arr.length; i++){

    if(arr[i] > max){
        max = arr[i]                    // 1,2,3,66,78,88
    }else if (arr[i] < min){
         min = arr[i]              // 1,-3
    }
}
console.log(max)    // 88
console.log(min)    // -3
// ...................................................................................................

//Q. remove duplicate elements from the arrey

// let arr = [12, 34, 12, 44, 34, 12, 45, 34, 57]

// let unarr = [];

// for (let i = 0; i < arr.length; i++) {
//     if (!unarr.includes(arr[i])) {
//         unarr.push(arr[i])
//     }
// }
// console.log(unarr)     // [ 12, 34, 44, 45, 57 ]

// .............................................................
// Q. collect unique from duplicate elements

// let arr = [15, 15, 66, 88, 88, 88,]

// let unique = arr.filter((el, index, arrey) => {
//     return ((arrey.indexOf(el,arrey.indexOf(el)+1) == index))         // used second occurance
// })
// console.log(unique)  // [ 15, 88 ]

// ......................................................................................
// Problem = concate subarray in array (remove sub array and made one)
            // 0       1           2   
// let arr = [[20,30],[40,50,60],[70,80,90]]
           
// let array = []

// for (let i = 0; i < arr.length; i++){
//   for (let m = 0; m < arr[i].length; m++){
//     array.push(arr[i][m])
//     // console.log([m])
//   }
// }
// console.log(array)                         // [ 20, 30, 40, 50, 60, 70, 80, 90 ]


// find no. of characters in string

// let kk = 'Shrikrishna G Kachare'
// let count  = 0
// for(let i = 0 ; i < kk.length ; i++){
//     if(kk[i]){
//         count  = count + 1
//     }
// }
// console.log(count)   // 21



// Prob = seperate the numbers and strings from given array

// FIRST APPROACH

// let arr = [-6, 'krishna', 2, 'swapnil', 0, 'vishwajit',22,78]
// let number = [];
// let char = [];

// for (let i = 0; i < arr.length; i++){

//     if(typeof(arr[i]) == 'number'){
//         number.push(arr[i])
//     }
//     else{
//         char.push(arr[i])
//     }
// }
// console.log(number)      // [ -6, 2, 0, 22, 78 ]
// console.log(char)        // [ 'krishna', 'swapnil', 'vishwajit' ]
// console.log(number.concat(char))     // [ -6, 2, 0, 22, 78, 'krishna', 'swapnil', 'vishwajit' ]
//------------------------------------------------------------------------------------------------------------
//SECOND APPROACH ( USING FOREACH METHOD)
