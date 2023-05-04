// Module package FILE

// const calculate = require("./hisob.js");

// const result1 = calculate.kopaytirish(80, 20);
// console.log("Result:", result1);
// console.log("*************");

// const result2 = calculate.qoshish(80, 20);
// console.log("Result2:", result2);
// console.log("*************");

// const result3 = calculate.ayirish(80, 20);
// console.log("Result3:", result3);

// ============================================
// console.log(require("module").wrapper);

// console.log(arguments);

const Account = require("./account.js");
Account.tellMeAboutClass();
Account.tellMeTime();

console.log("=======================");

const myAccount = new Account("Justin", 300000, 284924983949549);
myAccount.giveMeDetails();

myAccount.makeDeposit(1000000);

console.log("=======================");

myAccount.withdrawMoney(400000);
myAccount.makeDeposit(100000);
