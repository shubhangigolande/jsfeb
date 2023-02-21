//destructuring

//[12 pair] //blue

//[]
//{}
//[{}]

//1.array

// let rollNumber = [12, 23, 34, 45, 56, 78]
// let a = rollNumber[0] //12

// console.log(a) //12

// let [x, y, z, p, q, r] = rollNumber

// console.log(z) //34
// console.log(y) //23
// console.log(r) //78

// //2. nested array

// let num1 = [[11, 22, 33], [99, 88, 77]]
// console.log(num1[0]) //[11, 22, 33]

// console.log(num1[1]) // [99, 88, 77]

// console.log(num1[0][1]) //22

// let [[s, v, u], [d, e, f]] = num1
// console.log(v) //22
// console.log(d) //99

//3. object

let car = {
    model: "audi",
    color: "white"
}
console.log(car.model)
console.log(car.color)

let { model, color } = car
console.log(color) //white
console.log(model) //audi

//4. nested object

let student = {
    firstName: "mayuri",
    classInfo: {
        std: "KG",
        rollNumber: 20
    }
}

// console.log(student.classInfo.std) //KG
// console.log(student.firstName)

//let { firstName, classInfo: { std, rollNumber} } = student

// console.log(std)
// console.log(rollNumber)
// console.log(firstName)

//======2 way
// let { firstName:fn, classInfo: { std:sd, rollNumber:rn} } = student
// console.log(rn)

let { classInfo: { std: sd } } = student
console.log(sd)


//array inside object
let emp={
    fullName:"Vaibhav naik",
    empId:1234,
    skills:["java","python","cypress"]
}

let {fullName:fuN,empId:emID,skills:[a1,a2,a3]} =emp

console.log(a2)
console.log(fuN)
console.log(fullName)
