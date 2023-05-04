// Module packeage CORE

// Module packeage EXTERNAL

// =============== moment =============

// const moment = require("moment");

// const time = moment().format();
// // console.log(time);

// setInterval(() => {
//   console.log(`Hozirgi vaqt: ${time}`);
// }, 5000);

// =============== moment =============

// =====================================================================

// =============== inquirer =============

// const inquirer = require("inquirer");

// inquirer
//   .prompt([{ type: "input", name: "raqam", message: "Raqamni kiriting?" }])
//   .then((answer) => {
//     console.log("Men kiritgan raqam qiymati", answer.raqam);
//   })
//   .catch((err) => console.log(err));

// =============== inquirer =============

// =====================================================================

// =============== validator =============

// const validator = require("validator");

// const test = validator.isEmail("foo@bas.com");
// const test = validator.isInt("foo@bas.com");
// const test = validator.isIP("123.213.215.56");

// console.log("test:", test);

// =============== validator =============

// =====================================================================

// =============== uuid =============

const { v4: uuidv4 } = require("uuid");

const random = uuidv4();
console.log("random: ", random);

const chalk = require("chalk");
const log = console.log;

log(chalk.blue("My random number: ", random));

// =============== uuid =============
