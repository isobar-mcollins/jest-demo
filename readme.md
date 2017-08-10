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
See `BankAccount.js`, there is a method `deposit` in there. Write a test to verify that the balance increases after depositing money to an account.

**Hint:** follow the Arrange, Act Assert pattern to structure the test

1. Arrange all necessary preconditions and inputs.
1. Act on the object or method under test.
1. Assert that the expected results have occurred.
