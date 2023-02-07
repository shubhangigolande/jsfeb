//object literal

let shubhangi={ //shubhangi -->object
    firstName:"Shubhangi",// property : value
    lastName:"Golande",// property : value
    age:33,// property : value
    skill:["python","javascript"]// property : value
}

let Ansh={ //Ansh --> object
    firstName:"Ansh", // property : value
    lastName:"golande",// property : value
    age:28,// property : value
    skill:["java","sql"]// property : value
}

//40 objects -160
//setting th evalue outside the class 
class person1{
firstName=undefined
lastName=undefined
age=undefined
rollno=undefined
}
let shiv = new person1()
console.log(shiv)
shiv.firstName="shivansh"
shiv.lastName="golande"
shiv.age=3
shiv.rollno=8
console.log(shiv)



//setting the value at the time on object creation 
class personD{
    constructor(fn,ln,ag,rlno){
        this.firstName=fn
        this.lastName=ln
        this.age=ag
        this.rollno=rlno
    }
}
let anshu=new personD("ansh","golande",8,20)
let ananya=new personD("anu","kumbhar",12,5)

console.log(anshu)
console.log(ananya)

