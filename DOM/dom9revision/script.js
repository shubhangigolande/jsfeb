
{/* <h1 id="flw" class="one">Flower</h1>
<ul>
    <li class="flower">Rose</li>
    <li class="flower">Jasmin</li>
    <li class="flower">Lotus</li>
    <li class="flower">Chameli</li>
</ul> */}


let h1 = document.querySelector('#flw')
console.log(h1)
let li = document.querySelector('.flower')  //forst li element
console.log(li)

let liList = document.querySelectorAll('.flower') //nodeList
console.log(liList)

for (let i = 0; i < liList.length; i++) {
    //console.log(liList[i].textContent)
    if (i % 2 == 0) {
        liList[i].style.color="Red"
    }
    else{
      liList[i].style.color="Blue"  
    }
}

//HTMLcollection//nodelist

let a1=document.getElementsByClassName('flower')
console.log(a1)
console.log(a1.length)