
//polymorphism

//overriding  => different class, same method name, same signature

// class Shape{
//    draw() {
//     console.log('I am generic shape')
//    }
// }

// class Square extends Shape{
//     draw(){
//         console.log('I am square')
//     }
// }

// class Circle extends Square{
//     draw(){
//         console.log('I am circle')
//     }
// }

// let s1=new Shape()
// s1.draw()

// let s2=new Square()
// s2.draw()

// let s3=new Circle()
// s3.draw()


//program 2

// class Shape {
//     draw() {
//         console.log('I am generic shape')
//     }
// }

// class Square extends Shape {
//     draw() {
//         super.draw()
//         console.log('I am square')
//     }
// }

// class Circle extends Square {
//     draw() {
//         super.draw()
//         console.log('I am circle')
//     }
// }
// let s3 = new Circle()
// s3.draw()


// //2 sister
// elder //neckles


// class Myntra{
//     image(){
//         console.log('image of different items')
//     }
// }

// class Sandle extends Myntra{
//     image(){
//         super.image()
//         console.log('image of sandle')
//     }
// }

// class Shoe extends Myntra{
//     image(){
//         super.image()
//         console.log('image of shoe')
//     }
// }

// let d1=new Myntra()
// d1.image()

// let d2=new Sandle()
// d2.image()

// let d3=new Shoe()
// d3.image()

//======================================================

//overloading ==> same class, same method name, different signature(parameter)
// class Calculator {
//     addition(a, b) {
//         console.log(a + b)
//     }

//     addition(a, b, c) {
//         console.log(a + b + c)
//     }

//     addition(a, b, c, d) {
//         console.log(a + b + c + d)
//     }
// }

// let s1=new Calculator()
// s1.addition(20,30) //50

// s1.addition(1,2,3)

// s1.addition(1,2,3,4)

// let a
// console.log(a) //undefined


class Calculator {
    addition(a, b, c, d) {
        if (a != undefined && b != undefined && c != undefined && d != undefined) {
            console.log(a + b + c + d)
        }
        else if (a != undefined && b != undefined && c != undefined) {
            console.log(a + b + c)
        }
        else if (a != undefined && b != undefined) {
            console.log(a + b)
        }
    }
}

let c1=new Calculator()
c1.addition(2,3) //5

c1.addition(1,2,3) //6

c1.addition(1,2,3,4)//10


//x

//a,b