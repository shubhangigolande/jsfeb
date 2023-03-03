let bodyEle = document.querySelector('body')
console.log(bodyEle)

bodyEle.addEventListener('click', function (event) {
    console.log(event.target)
    console.log(event.target.tagName)
    console.log(event.target.textContent)
    console.log(event.target.id)
    console.log(event.target.className)
})