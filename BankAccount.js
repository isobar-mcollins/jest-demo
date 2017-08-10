/**
 * BankAccount
 *
 */
const BankAccount = function() {
  var balance = 0;

  this.deposit = amount => {
    return balance += amount;
  };

  this.getBalance = () => {
    return balance;
  };

  return this;
};

module.exports = BankAccount;
