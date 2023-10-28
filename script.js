class Wallet {
  // class fields #
  #balance = 0;
  #transactions = [];

  deposit(amount) {
    this.#processDeposit(amount);
    this.#balance += amount;
  }

  withdraw(amount) {
    this.#processWithdraw(amount);
    if (amount > this.#balance) {
      console.log("Not enough funds to withdraw");
      return;
    }

    this.#processWithdraw;
    this.#balance -= amount;
  }

  #processDeposit(amount) {
    console.log(`Depositing ${amount}`);

    this.#transactions.push({
      type: "deposit",
      amount,
    });
  }
  #processWithdraw(amount) {
    console.log(`Withdrawing: ${amount}`);

    this.#transactions.push({
      type: "withdraw",
      amount,
    });
  }

  get balance() {
    return this.#balance;
  }
  get transaction() {
    return this.#transactions;
  }
}

const wallet = new Wallet();
wallet.deposit(300);
wallet.withdraw(150);
console.log(wallet.balance);
console.log(wallet.transactions);
