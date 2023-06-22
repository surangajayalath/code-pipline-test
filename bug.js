async function foo() {
  // ...
}

async function bar() {
  // ...
  return await foo(); // Noncompliant
}


function someFunc(x) {
  return typeof x === "Number"; // Noncompliant, function will always return 'false'
}

var x = 'a';

var foo = {
  y: 1
}

with (foo) {  // Noncompliant
  y = 4;  // updates foo.y
  x = 3;  // does NOT add a foo.x property; updates x var in outer scope
}
print(foo.x + " " + x); // shows: undefined 3
async function foo() {
  // ...
}

async function bar() {
  // ...
  return await foo(); // Noncompliant
}


function someFunc(x) {
  return typeof x === "Number"; // Noncompliant, function will always return 'false'
}

var x = 'a';

var foo = {
  y: 1
}

with (foo) {  // Noncompliant
  y = 4;  // updates foo.y
  x = 3;  // does NOT add a foo.x property; updates x var in outer scope
}
print(foo.x + " " + x); // shows: undefined 3
async function foo() {
  // ...
}

async function bar() {
  // ...
  return await foo(); // Noncompliant
}


function someFunc(x) {
  return typeof x === "Number"; // Noncompliant, function will always return 'false'
}

var x = 'a';

var foo = {
  y: 1
}

with (foo) {  // Noncompliant
  y = 4;  // updates foo.y
  x = 3;  // does NOT add a foo.x property; updates x var in outer scope
}
print(foo.x + " " + x); // shows: undefined 3
