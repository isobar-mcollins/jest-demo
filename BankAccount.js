/**
 * BankAccount
 *
 */
const BankAccount = function() {
  var balance = 0;
  const transactionLimit = 500;
  const overdrawFee = 64;

  this.deposit = amount => {
    return balance += amount;
  };

  this.withdraw = (amount) => {
    var pendingBalance;

    if (amount <= transactionLimit) {
      if (this.getBalance() >= 0) {
        balance -= amount;

        if (balance < 0) {
          balance -= overdrawFee;
        }
      }

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
