## TDD with Mocha and Chai

## Outline
1. Recap assertions
2. Initializing a package
3. Exporting a module
4. Automating our tests with Mocha
5. Introducing Chai
6. Getting started with TDD

## Glossary
* **TDD** — Test driven development *(dev practice)*
* **BDD** — Behaviour driven development *(team methodology)*
* **Mocha** — BDD test framework
* **Chai** — Assertion library
* **Module** — A self-contained bundle of code

## Assertions
> A confident or forceful statement of fact or belief

* This thing is true
* These two things are the same

```js
function assert(value, message){
    if (!value) throw new Error(message)
}
```