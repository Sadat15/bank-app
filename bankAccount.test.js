const BankAccount = require('./bankAccount');

describe('BankAccount', () => {
  it('returns the bank balance', () => {
    const bankAccount = new BankAccount();
    expect(bankAccount.getBalance()).toEqual(0);
  });

  it('deposits money into account', () => {
    const bankAccount = new BankAccount();
    bankAccount.deposit(1000);
    expect(bankAccount.getBalance()).toEqual(1000);
  });

  it('returns balance after making a withdrawal', () => {
    const bankAccount = new BankAccount();
    bankAccount.deposit(1000);
    bankAccount.withdraw(500);
    expect(bankAccount.getBalance()).toEqual(500);
  });

  it('returns the bank statement', () => {
    const bankAccount = new BankAccount();
    expect(bankAccount.getStatement()).toEqual("date || credit || debit || balance");
  });

  it('gets today\'s date', () => {
    const bankAccount = new BankAccount();
    expect(bankAccount.getToday()).toEqual("25/10/2022");
  });

  it ('adds a new entry to transactions when a deposit is made', () => {
    const bankAccount = new BankAccount();
    bankAccount.deposit(1000);
    expect(bankAccount.getTransactions()).toEqual(["25/10/2022 || 1000.00 || || 1000.00"]);
  });

})