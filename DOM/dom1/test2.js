//<h1 class="person" id="one" name="textOnly">Mayuri</h1>

//element find out 

//by tagname
let byTagname = document.querySelector('h1')
console.log(byTagname)

//by classname (.)
let byclassName = document.querySelector('.person')
console.log(byclassName)

//by id(#)
let byID = document.querySelector('#one')
console.log(byID)

//common formula
//tagname[attribute="value"]
let byCommonFormula = document.querySelector("h1[name='textOnly']")
console.log(byCommonFormula)

let a1 = document.querySelector('h1[class="person"]')
console.log(a1)

let text = document.querySelector('h1').textContent
console.log(text)


//program1
// byTagname.addEventListener('click', function () {
//     byTagname.textContent = "Vaibhav"

// })

//program 2

byclassName.addEventListener('click', function () {
    byclassName.textContent = byclassName.textContent.toUpperCase()
    byTagname.style.color="red"
})




// let person={
//     firstName:"mayuri"
// }
// person.firstName="vaibahv"


    