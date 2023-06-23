// const jwt = require('jsonwebtoken');

// let token = jwt.sign({ foo: 'bar' }, key, { algorithm: 'HS256' }); // Compliant

// jwt.verify(token, key, { expiresIn: 360000 * 5, algorithms: ['HS256'] }, callbackcheck); // Compliant


// const jwt = require('jsonwebtoken');

// let token = jwt.sign({ foo: 'bar' }, key, { algorithm: 'none' }); // Noncompliant: 'none' cipher doesn't sign the JWT (no signature will be included)

// jwt.verify(token, key, { expiresIn: 360000 * 5, algorithms: ['RS256', 'none'] }, callbackcheck); // Noncompliant: 'none' cipher should not be used when verifying JWT signature


if (x == 0) {
  doSomething();
} else if (x == 1) {
  doSomethingElse();
} else {
  throw "Unexpected value for x";
}
