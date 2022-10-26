class BankAccount {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }

  // creates a date to display on the bank statement
  getToday() {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0");
    let yyyy = today.getFullYear();
    today = dd + "/" + mm + "/" + yyyy;
    return today;
  }

  // displays the current bank balance
  getBalance() {
    return this.balance;
  }

  // returns the recorded transactions
  getTransactions() {
    return this.transactions;
  }

  // deposits money into the account
  // creates a new debit entry in the bank statement
  deposit(amount) {
    this.balance = this.balance + amount;
    this.transactions.push(
      this.getToday() +
        ` || ${amount.toFixed(2)} || || ${this.balance.toFixed(2)}`
    );
  }

  // withdraws money from the account
  // creates a new credit entry in the bank statement
  withdraw(amount) {
    if (amount > this.getBalance()) {
      return "Insufficient funds in your account.";
    } else {
      this.balance = this.balance - amount;
      this.transactions.push(
        this.getToday() +
          ` || || ${amount.toFixed(2)} || ${this.balance.toFixed(2)}`
      );
    }
  }

  // returns bank statement with all the transactions
  getStatement() {
    if (this.transactions.length === 0) {
      return "date || credit || debit || balance";
    } else {
      return (
        "date || credit || debit || balance\n" +
        this.getTransactions().reverse().join("\n")
      );
    }
  }
}

module.exports = BankAccount;
