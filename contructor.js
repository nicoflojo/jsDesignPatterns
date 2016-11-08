// each creates empty new object
var newObject = {};
var newObject = Object.create( Object.prototype );
var newObject = new Object();

// 4 methods to assign keys to values

// dot syntax
newObject.someKey = "Hello world!";
// square bracket syntax
// set properties
newObject["someKey"] = "Hello world!";
// get properties
var value = newObject["someKey"];

// ECMAScript 5 compatible

// Object.defineProperty
// set properties
Object.defineProperty(newObject, "someKey", {
  value: "for mroe control of the properties behavior",
  writeable: true,
  enumerable: true,
  configurable: true
});

// Object.defineProperty shorthand
var defineProp = function(obj, key, value) {
    var config = {
      value: value,
      writable: true,
      enumerable: true,
      configurable: true
    };
    Object.defineProperty(obj, key, config);
};

// How to use
var person = Object.create(Object.prototype);
// populate object with properties
defineProp(person, "car", "Delorean");
defineProp(person, "dateOfBirth", "1981");
defineProp(person, "hasBeard", true);

console.log(person)
// outputs Object { car: "Delorean", DateOfBirth: "1981", hasBeard: true }

// Object.defineProperties
// set properties

Object.defineProperties(newObject, {
  "somekey": {
    value: "Hello world!",
    writable: true
  },
  "anotherKey": {
    value: "Foo bar",
    writable: false
  }
});
