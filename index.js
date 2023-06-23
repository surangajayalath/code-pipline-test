if(unexpectedCondition) {
  alert("Unexpected Condition");
}

if (var == 'howdy') {...} // Noncompliant

var x  = 1;
delete x;       // Noncompliant

function foo(){
..
}

delete foo;  // Noncompliant

const express = require('express');
const helmet = require('helmet');

let app = express();

app.use(
  helmet.dnsPrefetchControl({
    allow: true // Sensitive: allowing DNS prefetching is security-sensitive
  })
);
