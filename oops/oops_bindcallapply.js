// //call bind apply
// //bind

// let info={
//     firstName:"shubhangi",
//     latsName:"Golande",
//     age:23,
//     rollNo:25,
//     skills:['cypress','js','python'],
//     display:function(){
//         console.log(this.firstName+this.latsName)
//     }
// }
// info.display()//shubhangigolande

// let info2={
//     firstName:"sarika",
//     latsName:"kokane",
//     age:30,
//     rollNo:12,
//     skills:['js','css']
// }
// let brdm=info.display // cannot be  print display method
// console.log(brdm)// shubhangiGolande
// //[Function: display]
// //[display(this.firstName+this.LastName)]

// //bind
// let brdm2=brdm.bind(info2)
// console.log(brdm2)//[Function: bound display]
// brdm2()//sarikakokane

// //program 2

// let john={
//     firstName:"shubhangi",
//     latsName:"bhosale",
// }
// let smith={
//     firstName:"sarika",
//     latsName:"ghule",
// }
// let steven={
//     firstName:"rupali",
//     latsName:"deshmukh",
// }
// let mariya={
//     firstName:"priyanka",
//     latsName:"dhokchoule",
// }
// let displayName=function(){
//     console.log(this.firstName+this.latsName) //undefined + undefined
// }
// displayName()//NaN

// // 1  =>  bind()

// let a=displayName.bind(mariya)() 
// // or
// let a2=displayName.bind(smith)
// console.log(a2)//[Function: bound displayName]
// a2()//sarikaghule

// let a3=displayName.bind(steven)()//rupalideshmukh

// displayName.bind(john)()//shubhangibhosale //without let keyword with infront of bind methods



// // 2  => call()
// displayName.call(john)//shubhangibhosale
// displayName.call(steven)//rupalideshmukh
// displayName.call(smith)//sarikaghule
// displayName.call(mariya)//priyankadhokchoule

// let displayName2=function(greet){
//     console.log(`${greet}${this.firstName}${greet}`)
// }
// displayName2()
// displayName2.call(john,'well')//wellshubhangiwell
// displayName2.call(steven,'come')//comerupalicome
// displayName2.call(smith,'javascript')//javascriptsarikajavascript


// //  3 =>  apply()

// displayName2.apply(mariya,['hello'])//hellopriyankahello    
// displayName2.apply(steven,['hi'])//hirupalihi
// displayName2.apply(smith,['wel'])//welsarikawel


//===============================================================================================================

// let swati={
//     firstName:'swati',
//     lastName:'sahane',
//     age:23,
//     rollNo:35,
//     display:function(){
//         console.log(this.firstName+this.lastName)
//     }
// }
// console.log(swati.firstName)//swati
// console.log(swati.lastName)//sahane
// console.log(swati.display)//[Function: display]
// //display:function(){
//  //   console.log(this.firstName+this.lastName)
// //}
// swati.display()//swatisahane

// //bind

// let a=swati.display.bind(swati)()//swatisahane

// //call
// swati.display.call(swati)//swatisahane

// //apply()
// swati.display.apply(swati)//swatisahane

// //========================================================================================================

// let sarika={
//     firstName:'sarika',
//     lastName:'kokane',
//     skill:'java',
//     display:function(){
//         console.log(this.firstName+this.lastName)
//     }
// }
// let shubhangi={
//     firstName:"shubhangi",
//     lastName:'golande',
// }
// let aa=sarika.display.bind(shubhangi)//
// aa()//shubhangigolande


// //=======================================================================================================
// let dinga={
//     firstName:'dinga'

// }
// let pinga={
//     firstName:'pinga'


// }
// let bhunga={
//     firstName:'bhunga'

// }
// let linga={
//     firstName:'linga'

// }
// let display1=function(){
//     console.log(this.firstName)
// }

// let w=display1.bind(pinga)
// w()//pinga
// //or
// display1.bind(pinga)()//pinga

// //call()
// display1.call(linga)//linga
// display1.call(bhunga)//bhunga

// display1.apply(linga)//linga


//=============================================================================

let amol={
firstName:'amol'
}
let anil={
firstName:'anil'
}
let akshay={
firstName:'akshay'
}
let displayy=function(greet){
    console.log(`${greet}${this.firstName}have a nice day!!!!`)

}
let sa=displayy.bind(anil,'hi')
sa()//hianilhave a nice day!!!!
4
displayy.call(amol,'hello')//helloamolhave a nice day!!!!

displayy.apply(akshay,['welcome'])//welcomeakshayhave a nice day!!!!



