A small group of lessons to learn and explore TDD.

## Lessons

### Installing Jest

_git:_ [start](https://github.com/isobar-mcollins/jest-demo/tree/feature/lesson-one-start)
, [end](https://github.com/isobar-mcollins/jest-demo/tree/feature/lesson-one-finish)

`npm i -D jest` to install Jest as a dev dependency

Update the `package.json` test command like so to run test with a simple `npm t`

```
"scripts": {
  "test": "jest"
},
```

### Testing the deposit method

_git:_ [start](https://github.com/isobar-mcollins/jest-demo/tree/feature/lesson-two-start)
, [end](https://github.com/isobar-mcollins/jest-demo/tree/feature/lesson-two-finish)

See `BankAccount.js`, there is a method `deposit` in there. Write a test to verify that the balance increases after depositing money to an account.

**Hint:** follow the Arrange, Act Assert pattern to structure the test

1. Arrange all necessary preconditions and inputs.
1. Act on the object or method under test.
1. Assert that the expected results have occurred.

### Your first TDD - Withdraw

_git:_ [start](https://github.com/isobar-mcollins/jest-demo/tree/feature/lesson-three-start)
, [end](https://github.com/isobar-mcollins/jest-demo/tree/feature/lesson-three-finish)

`BankAccount.js` doesn't have a `withdraw` method. Create one that is the oposite of the `deposit` method. Being TDD you should create you tests first before writing the functionality to prove this.

If it were a user story, it would be:

    Create a method to reduce the balance of a bank account by an amount given.

    Business rules:
     - no penalty for a negative balance
     - can remove money even when no funds are available


### Updating the withdraw method
_git:_ [start](https://github.com/isobar-mcollins/jest-demo/tree/feature/lesson-four-start)
, [end](https://github.com/isobar-mcollins/jest-demo/tree/feature/lesson-four-finish)

There are some issues with the withdraw method that can be abused, leading to infinite monies. If they were a user story, they would be:

    As a business
    I want to stop customers from withdrawing money when no funds are available
    So that they done have infinite money

    Business rules:
     - customers can still withdraw more money than they have
     - prevent a withdraw if there are no funds available at the time of the transaction

<hr>

    As a business
    I want to limit how much customers can withdraw in a transaction
    So that we don't go broke

    Business rules:
     - limit to be hardcoded at $500
     - transaction can be approved as long as there are funds in account


### Adding fees
_git:_ [start](https://github.com/isobar-mcollins/jest-demo/tree/feature/lesson-five-start)
, [end](https://github.com/isobar-mcollins/jest-demo/tree/feature/lesson-five-finish)

    As a business
    I want to charge customers a fee for withdrawing more money than they have
    So that we can make more money

    Business rules:
     - fee to be hardcoded at $64
     - fee should only be charged once if the withdraw puts balance below $0
