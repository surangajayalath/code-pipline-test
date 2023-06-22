/**
 * @constructor
 */
function MyClass() {
  this.foo = 'bar';
}

var someClass = function(){
  this.prop = 1;
}

var obj1 = new someClass;  // Compliant
var obj2 = new MyClass();  // Compliant regardless of considerJSDoc value
