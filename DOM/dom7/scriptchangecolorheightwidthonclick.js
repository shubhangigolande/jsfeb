{/* <h1 class="std">Student</h1>
<button id="btn">Click Me</button> */}

let heading = document.querySelector('.std')
console.log(heading)

let button = document.querySelector('#btn')
console.log(button)

//Problem 1
//click on button and change text color, bg color , height width

button.addEventListener('click', function () {
    heading.textContent = "Shamkumar"
    heading.style.color = "Red"
    heading.style.backgroundColor = "Green"
    heading.style.height = "50px"
    heading.style.width = "200px"

})