// //Bank account

// //accName,accNumber,branch,bal
// //deposit(), withdrawl(),transaction(),totalDeposite(),totalWithdrawl()

// class bank {
//     constructor(accName, accNo, branch, bal) {
//         this.accName = accName
//         this.accNo = accNo
//         this.branch = branch
//         this.bal = bal
//         this.transaction = []
//     }
//     deposite(amount) {
//         this.bal = this.bal + amount
//         this.transaction.push(amount)
//         return this.bal
//     }
//     withdrawl(amount) {
//         if (this.bal >= amount) {
//             this.bal = this.bal - amount
//             this.transaction.push(-amount)
//             return this.bal
//         }
//         else{
//             console.log('insufficient balance')
//         }
//     }
//     lastFiveTransaction(){
//         return this.transaction.slice(-5)

//     }
//     totalDepositA(){
//         return this.transaction.filter((el)=>{
//             return el>0
//         }).reduce((acc,el)=>{
//             return acc+el
//         },0)
//     }
//     totalwithDrawlA(){
//         return this.transaction.filter((el)=>{
//             return el<0
//         }).reduce(function(acc,el){
//             return acc+el
//         },0)

//     }

// }   
// let shubhangi=new bank('shubhangig',123456,"baramati",2000)
// console.log(shubhangi)
// shubhangi.deposite(200)
// shubhangi.withdrawl(500)
// shubhangi.deposite(400)
// shubhangi.withdrawl(50)
// shubhangi.deposite(600)
// shubhangi.withdrawl(200)
// console.log(shubhangi.transaction)
// let tran=shubhangi.lastFiveTransaction()
// console.log(tran)

// console.log(shubhangi.totalDepositA())
// console.log(shubhangi.totalwithDrawlA())


// //       -9    -8   -7  -6   -5   -4   -3    -2   -1
// // let t = [200, -500, 400,-50, 220, -300,-900, 200, 400]
// // //        0     1     2   3   4     5    6     7    8

// // t.slice(-8,-2)


// //2000+200




class Bank {
    constructor(accName, accNO, branch, Bal) {
        this.accName = accName
        this.accNO = accNO
        this.branch = branch
        this.Bal = Bal
        this.transaction = []
    }
    deposit(amount) {
        this.Bal = this.Bal + amount
        this.transaction.push(amount)
        return this.Bal
    }
    withdrawl(amount) {
        if (this.Bal > amount) {
            this.Bal = this.Bal - amount
            this.transaction.push(-amount)
            return this.Bal
        }
        else {
            console.log("insufficient Balance")
        }
    }
    lastFiveTransaction(){
        return this.transaction.slice(-5)
    }
    totalDeposit(){
        return this.transaction.filter((el)=>{
            return el>0
        }).reduce((acc,el)=>{
            return acc+el
        },0)
    }

    totalwithdrawl(){
        return this.transaction.filter((el)=>{
            return el<0
        }).reduce((acc,el)=>{
            return acc+el
        },0)
    }

}
let shubhangi = new Bank('shubhangi', 123456, 'kharadi', 300)
//console.log(shubhangi)
shubhangi.deposit(500)
shubhangi.deposit(650)
shubhangi.deposit(745)
shubhangi.deposit(560)
shubhangi.deposit(700)

shubhangi.withdrawl(600)
shubhangi.withdrawl(1000)
shubhangi.withdrawl(500)

console.log(shubhangi)
console.log(shubhangi.totalDeposit())
console.log(shubhangi.totalwithdrawl())
console.log(shubhangi.lastFiveTransaction())