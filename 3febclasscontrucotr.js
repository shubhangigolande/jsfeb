// let mayuri = {
//     //     firstName: "Mayuri",
//     //     lastName: "Katwe",
//     //     age: 25,
//     //     skill: ['java', 'selenium', 'javascript']
//     // }
    
//     // //10 th std class =>100
//     // let vaibhav = {
//     //     firstName: "vaibhav",
//     //     lastName: "kulkarni",
//     //     age: 22,
//     //     skill: [ 'javascript','python']
//     // }
    
//     // let vaibhav = {
//     //     firstName: "vaibhav",
//     //     lastName: "kulkarni",
//     //     age: 22,
//     //     skill: [ 'javascript','python']
//     // }
    
//     //class  => multiple object  //blue print  ==> user define datatype
    
//     // class Student {
//     //     firstName="sham"
//     //     lastName="raut"
//     //     age=30
//     //     skills="javascript"
//     // }
    
//     // let mayuri=new Student()
//     // console.log(mayuri)
    
//     // let vaibhav=new Student()
//     // console.log(vaibhav)
    
//     //1 way ==> setting object value outside the class
    
//     class Student {
//         firstName = undefined
//         lastName = undefined
//         age = undefined
//         skills = undefined
//     }
//     let ram = new Student()
//     console.log(ram)
//     ram.firstName = "Ram"
//     ram.lastName = "kumar"
//     ram.age = 30
//     ram.skills = "cypress"
//     console.log(ram)
    
    
//     let sham = new Student()
//     console.log(sham)
//     sham.firstName = "Sham"
//     sham.lastName = "rao"
//     sham.age = 78
//     sham.skills = "SQL"
//     console.log(sham)
    
    
//     //2 way ==> constructor  => class
    
//     class StudentOne {
//         constructor(fName, lName, ag, sk) {
//             this.firstName = fName
//             this.lastName = lName
//             this.age = ag
//             this.skills = sk
//         }
//     }
    
//     let mayuri = new StudentOne("mayuri", "katwe", 23, "java")
//     console.log(mayuri)
    
//     let ganesh = new StudentOne('ganesh', "deshpande", 45, 'django')
//     console.log(ganesh)
    
    
    //3 way ==> by using method
    class StudentThree {
        setFName(fn) {
            this.firstName = fn
        }
        setLName(ln) {
            this.lastName = ln
        }
        setAge(ag) {
            this.age = ag
        }
        setSkill(sk) {
            this.skills = sk
        }
    }
    
    let sathish = new StudentThree()
    console.log(sathish) //{}
    sathish.setFName("Sathish")
    sathish.setLName('kumar')
    sathish.setAge('56')
    sathish.setSkill('java')
    console.log(sathish)
    
    let ramesh = new StudentThree()
    console.log(ramesh)
    ramesh.setFName('ramesh')
    ramesh.setLName('raut')
    ramesh.setAge(23)
    ramesh.setSkill('java')
    console.log(ramesh)
       
    
    // let a={}
    
    // let b=[]
    
    // let c=''