class BankAccount {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }

  // creates a date to display on the bank statement
  getToday() {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    let yyyy = today.getFullYear();
    today = dd + "/" + mm + "/" + yyyy;
    return today;
  }

  // deposits money into the account
  // creates a new debit entry in the bank statement
  deposit(amount) {
    this.balance = this.balance + amount;
    this.transactions.push(this.getToday() + ` || ${amount.toFixed(2)} || || ${this.balance.toFixed(2)}`);
  }

  // withdraws money from the account
  // creates a new credit entry in the bank statement
  withdraw(amount) {
    this.balance = this.balance - amount;
  }

  // displays the current bank balance
  getBalance() {
    return this.balance;
  }

  getTransactions() {
    return this.transactions;
  }
  // returns bank statement with all the transactions
  getStatement() {
    return "date || credit || debit || balance";
  }
}

module.exports = BankAccount;
