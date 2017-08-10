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
