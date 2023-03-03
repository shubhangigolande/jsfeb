{/* <h1 class="one">Student</h1>
<button id="btn">Click Me</button> */}

let heading = document.querySelector('.one')
console.log(heading)

let buttonA = document.querySelector('#btn')
console.log(buttonA)

buttonA.addEventListener('click', function () {
    heading.textContent = "Mayuri is student"
    heading.style.color = "red"
    heading.style.backgroundColor = "Blue"
})