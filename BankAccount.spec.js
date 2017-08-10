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

  test('should allow withdraws', () => {
    var bankAccount = new BankAccount();

    expect(BankAccount().withdraw).not.toBeUndefined();
  });

  // have a free passing test
  // write your own to test the `BankAccount.deposit` method
  test('should come with an example test', () =>{
    expect(true).toBe(true);
  });
});
