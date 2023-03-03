//html element search/ find 4 method

//<p class="tenth" id="one" name="shamKumar">Student</p>

//by tagname
let a1 = document.querySelector('p')
console.log(a1)

//by classname
let a2 = document.querySelector('.tenth')
console.log(a2)

//by id
let a3 = document.querySelector('#one')
console.log(a3)

//tagname[attribute="value"]
let a4 = document.querySelector('p[name="shamKumar"]')
console.log(a4)


console.log(a4.textContent)

a4.addEventListener("click", function () {
    a4.textContent = a4.textContent.toUpperCase()
})






let person = {
    fn: "mayuri", //MAYURI
    ln: 'katwe'
}
console.log(person.fn) //mayuri
person.fn = person.fn.toUpperCase()
console.log(person)

