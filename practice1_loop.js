
// // //reverse string
// // let str='shubhangi'
// // let newst=''
// // for(let i=str.length-1;i>=0;i--){
// //    newst=newst+str[i]  
// //    //           i
// //    //   i   +   g
// //    //   ig  +   n
// //    //   ign +   a
// //    //   igna  +   h
// // }
// // console.log(newst)//ignahbuhs



// // let a='shivansh'
// // let rev=''
// // for(i=0;i<=a.length-1;i++){
// //     rev=a[i]+rev
// // }
// // console.log(rev)//hsnavihs



// // let b='ansh'
// // let revstr=''
// // for(let i=0;i<=b.length-1;i++){
// //     revstr=b[i]+revstr
// // }
// // console.log(revstr)//hsna

// for loop increment

// let a='shrikrishna'
// let str=''
// for (let i=0;i<a.length;i++){
//     str=a[i]+str
// }
// console.log(str)

// for loop decrement

// let a='shrikrishna'
// let str=''
// for (let i=a.length-1;i<=0;i--){
//     str=str+a[i]
// }
// console.log(str)

// // //================================================================================

// table of 2

// let tbl=0
// for(let i=1;i<=10;i++){
//  tbl=i*2
//  console.log(tbl)
// }

// //or

// for(let j=2;j<=20;j=j+2){
//     console.log(j)
// }


//reverse table of 3

// let table=0
// for (i=10;i>=1;i--){
//     table=i*3
//     console.log(table)

// }

//2nd way reverse table

// for (let i=30;i>=3;i=i-3){
//     console.log(i)
// }

// //================================================================================

//even or odd

// let arr=[1,2,5,4,7,9,8,6,2,4,54,24,33]
// let even=[]
// let odd=[]
// for(let i=0;i<arr.length;i++){
//     if(arr[i]%2==0){
//         even.push(arr[i])
//     }
//     else{
//         odd.push(arr[i])
//     }
// }
// console.log(`even no ${even}`)
// console.log(`odd no ${odd}`)


// remove the duplicate elements

// let arr=[12,45,78,32,65,98,12,78,32,65]
// let unarr=[]

// for( let i=0 ;i<arr.length;i++){
//     if(!unarr.includes(arr[i])){
//         unarr.push(arr[i])
//     }
// }
// console.log(unarr)//12,


////================================================================================

// let a="shubhangi"
// let v=""

// for (let i=0;i<a.length;i++){
//     v=a[i]+v
// }
// console.log(v)

//or
// let a1='shuhbangi'
// for (let j=a1.length;j>=0;j--){
// console.log(a1[j])    
// }


// let arr=[12,23,45,78,98,65]
// let even=[]
// let odd=[]
// for( let i=0;i<arr.length;i++){
//     if(arr[i]%2==0){
//         even.push(arr[i])
//     }
//     else{
//         odd.push(arr[i])
//     }
// }
// console.log(even)
// console.log(odd)

//even odd

// let num=[12,85,75,66,3,5,15]
// let even=[]
// let odd=[]
// num.filter(function(el){
// if(el%2==0){
//     even.push(el)
// }
// else{
//     odd.push(el)
// }
// })
// console.log(even)
// console.log(odd)


//even odd

// let num1=[12,85,75,66,3,5,15]
// let even1=[]
// let odd1=[]
// num1.forEach(function(el){
// if(el%2==0){
//     even1.push(el)
// }
// else{
//     odd1.push(el)
// }
// })
// console.log(even1)
// console.log(odd1)


//min max
let arr=[12,23,44,54,74,35,10,35,60,5,3,2,0,-1,-3,-5]
let min=0
let max=0
// for(let i=0;i<arr.length;i++){
//     if(arr[i]>max){
//         max=arr[i]
//     }
//     else if(arr[i]<min){
//         min=arr[i]
//     }
// }
// console.log(max)
// console.log(min)

//by using filter method min & max
// arr.filter(function(el){
//     if(el>max){
//         max=el
//     }
//     else if(el<min){
//         min=el
//     }
// })
// console.log(max)
// console.log(min)


// // //================================================================================


// // take input from the user
// const number = parseInt(prompt("Enter a positive number: "));
// let isPrime = true;

// // check if number is equal to 1
// if (number === 1) {
//     console.log("1 is neither prime nor composite number.");
// }

// // check if number is greater than 1
// else if (number > 1) {

//     // looping through 2 to number-1
//     for (let i = 2; i < number; i++) {
//         if (number % i == 0) {
//             isPrime = false;
//             break;
//         }
//     }

//     if (isPrime) {
//         console.log(`${number} is a prime number`);
//     } else {
//         console.log(`${number} is a not prime number`);
//     }
// }




// //================================================================================