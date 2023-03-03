{/* <h1>Fruits</h1>
<ul>
    <li>Apple</li>
    <li>Mango</li>
    <li>Banana</li>
</ul>
<input type="text">
<button id = "one">Add element</button> */}

let headingOne = document.querySelector('h1')
let ulList = document.querySelector('ul')
let inputText = document.querySelector('input')
let buttonOne = document.querySelector('#one')

console.log(headingOne)
console.log(ulList)
console.log(inputText)
console.log(buttonOne)
ulList.addEventListener('click', function (e) {

    //console.log(e.target)
    //console.log(e.target.tagName)
    //console.log(e.target.className)


    if (e.target.tagName === "BUTTON") {

        if (e.target.className == "remove") {
            let li = e.target.parentElement
            let ul = li.parentElement
            ul.removeChild(li)
        }

        else if (e.target.className == "up") {

            let li = e.target.parentElement  // mango
            let prevLi = li.previousElementSibling // apple
            if(prevLi){
                ulList.insertBefore(li,prevLi) 
            }
        }

        else if (e.target.className == "down") {
            let li = e.target.parentElement 
            let ul = li.parentElement 
            let nextLi = li.nextElementSibling
            if(nextLi){
                ul.insertBefore(nextLi,li)
            }
        }


    }




})







buttonOne.addEventListener('click', function () {
    let text = inputText.value
    let newLi = document.createElement('li')//<li></li>
    newLi.textContent = text // <li>Papaya</li>
    createButtons(newLi)
    ulList.appendChild(newLi)
    inputText.value = ""

})


function createButtons(li) {

    // create button 
    // add text to button
    // add class to button 
    // append to li

    let remove = document.createElement('button')
    remove.textContent = "Remove"
    remove.classList.add('remove')
    li.appendChild(remove)


    let up = document.createElement('button')
    up.textContent = "Up"
    up.classList.add('up')
    li.appendChild(up)

    let down = document.createElement('button')
    down.textContent = "Down"
    down.classList.add('down')
    li.appendChild(down)


}

