const BankAccount = require('./BankAccount');

describe('a BankAccount', () => {

  test('should allow deposits', () => {
    // Arrange - all necessary preconditions and inputs
    var bankAccount = new BankAccount();

    // Act - on the object or method under test
    bankAccount.deposit(32);

    // Assert - that the expected results have occurred
    expect(BankAccount().deposit).not.toBeUndefined();
    expect(bankAccount.getBalance()).toBe(32);
  });

  describe('when withdrawing funds', ()=> {
    test('should allow withdraws', () => {
      var bankAccount = new BankAccount();
      bankAccount.withdraw(8);

      expect(BankAccount().withdraw).not.toBeUndefined();
      expect(bankAccount.getBalance()).toBe(-8);
    });

    test('should limit how much can be withdrawn', () => {
      var deniedAccount = new BankAccount();
      var acceptableAccount = new BankAccount();

      deniedAccount.withdraw(9999);
      acceptableAccount.withdraw(250);

      // @todo: catch TransactionError
      expect(deniedAccount.getBalance()).toBe(0);
      expect(acceptableAccount.getBalance()).toBe(-250);
    });

    test('should only withdraw when funds are avail' , () => {
      var bankAccount = new BankAccount();
      bankAccount.withdraw(20);
      bankAccount.withdraw(40);

      expect(bankAccount.getBalance()).toBe(-20);
    });
  });

  // have a free passing test
  // write your own to test the `BankAccount.deposit` method
  test('should come with an example test', () =>{
    expect(true).toBe(true);
  });
});
