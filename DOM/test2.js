

//<p class ="frd" id ="para" name="mayuri">I am learning javascript</p> 

//1. by tagname

let byTagname = document.querySelector('p')
console.log(byTagname)

//2. by id
let byID = document.querySelector('#para')
console.log(byID)

//3. by className
let byClassName = document.querySelector('.frd')
console.log(byClassName)


//4. common formula
//tagName[attribute="value"]
let byCommonformula=document.querySelector('p[name="mayuri"]')
console.log(byCommonformula)

let y1=document.querySelector("p[class='frd']")
console.log(y1)


