if (var == 'howdy') {...} // Noncompliant

async function foo() {
  // ...
}

async function bar() {
  // ...
  return await foo(); // Noncomplia
}
