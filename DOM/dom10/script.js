let singleElemnt = document.querySelector('li')
console.log(singleElemnt)

let allElement = document.querySelectorAll('li')
console.log(allElement) //nodelist(static)
console.log(allElement.length) //4


//to add one more li element in ul lit
let newLi=allElement[0].parentNode.appendChild(document.createElement('li'))
console.log(newLi)

console.log(allElement) //nodelist(static)
console.log(allElement.length) //5

/ul.appendChild(li)


//=============================================================

let htmlCollection=document.getElementsByTagName('li')
console.log(htmlCollection)
console.log(htmlCollection.length)

htmlCollection[0].parentNode.appendChild(document.createElement('li'))

console.log(htmlCollection)
console.log(htmlCollection.length)

//getElement

//==========================================================================

let a=document.getElementById('one')
console.log(a)

let b=document.getElementsByClassName('tenth')
console.log(b) //htmlcollection

let c=document.getElementsByTagName('li')
console.log(c)

//================================================================
// //<p class="para">Paragraph</p>
// let pElement=document.querySelector('.para')
// console.log(pElement)
// console.log(pElement.classList)


// //add new class
// pElement.classList.add('tenn')
// console.log(pElement.classList)

// // to add remove class
// pElement.classList.remove('tenn')
// console.log(pElement.classList)

// // //toggle 
// pElement.classList.toggle('tenthclass')
// console.log(pElement.classList)

// pElement.classList.toggle('tenthclass')
// console.log(pElement.classList)

