const BankAccount = require("./bankAccount");

const bankAccount = new BankAccount();
bankAccount.deposit(1000);
bankAccount.withdraw(500);
console.log(bankAccount.getStatement());