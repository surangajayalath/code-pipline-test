function MyClass() {
  this.foo = 'bar';
}

var someClass = 1;

var obj1 = new someClass;    // Noncompliant;
var obj2 = new MyClass();    // Noncompliant if considerJSDoc parameter set to true. Compliant when considerJSDoc=false


if (var == 'howdy') {...} // Noncompliant
if (var == 'howdy') {...} // Noncompliant
if (var == 'howdy') {...} // Noncompliant
if (var == 'howdy') {...} // Noncompliant
if (var == 'howdy') {...} // Noncompliant
