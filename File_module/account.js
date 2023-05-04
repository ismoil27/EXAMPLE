const moment = require("moment");

class Account {
  #amount;
  #account_id;
  constructor(name, amount, account_id) {
    this.name = name;
    this.#amount = amount;
    this.#account_id = account_id;
  }

  tellMeBalance() {
    console.log(`Sizning hisobingizdagi qoldiq: ${this.#amount}$`);
    return this.#amount;
  }

  withdrawMoney(amount) {
    if (this.#amount > amount) {
      this.#amount -= amount;
      console.log(`Hisobdan ${amount} pul yechildi. Qoldiq ${this.#amount}$`);
    } else {
      console.log(
        `Sizning hisobingizdagi mablag' yetarlik emas ${this.#amount}$`
      );
    }
  }

  makeDeposit(amount) {
    this.#amount += amount;
    console.log(
      `Hisobingiz to'ldirildi, hozirda summa ${this.#amount}$ ni tashkil etadi`
    );
  }

  giveMeDetails() {
    console.log(
      `Salom hurmatli ${this.name}. Sizning hisobingiz ${this.#amount}$ ga teng`
    );
    console.log(`Hisob raqamingiz ${this.#account_id}`);
  }

  static tellMeAboutClass() {
    console.log(`Bu class accountlarni yasash uchun yaratilgan`);
  }

  static tellMeTime() {
    console.log(`Hozirgi vaqt: ${moment().format("YYYY-MM-DD HH:mm:ss")}`);
  }
}

module.exports = Account;
