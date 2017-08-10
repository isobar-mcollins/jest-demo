/**
 * BankAccount
 *
 */
const BankAccount = function() {
  var balance = 0;
  const transactionLimit = 500;

  this.deposit = amount => {
    return balance += amount;
  };

  this.withdraw = amount => {
    if (amount <= transactionLimit) {
      return balance -= amount;

    } else {
      // @todo: throw TransactionError('over transaction limit')
    }
  };

  this.getBalance = () => {
    return balance;
  };

  return this;
};

module.exports = BankAccount;
