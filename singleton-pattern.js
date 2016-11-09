// Singleton Pattern

var mySingleton = (function () {
  var instance;
  function init() {
    function privateMethod() {
      console.log("I am private");
    }
    var privateVariable = "Im also private";
    var privateRandomNumber = Math.random();

    return {
      // Public Methods and variables
      publicMethod: function() {
        console.log("The public can see me!");
      },
      publicProperty: "I am also public",
      getRandomNumber: function() {
        return privateRandomNumber;
        }
      };
    };
    return {
      // Get Singleton or die tryin'
      getInstance: function() {
        if (!instance) {
          instance = init();
        }
        return instance;
      }
    }
  };
}());


// Bad Singleton

var myBadSingleton = (function() {
  var instance;
  function init () {
    var privateRandomNumber = Math.random();
    return {
      getRandomNumber: function() {
        return privateRandomNumber;
      }
    };
  };
  return {
    // Always create new instance
    getInstance: function () {
      instance = init();
      return instance;
    }
  };
}());

// Usage
var singleA = mySingleton.getInstance();
var singleB = mySingleton.getInstance();
console.log(singleA.getRandomNumber() === singleB.getRandomNumber());
// true
var badSingleA = myBadSingleton.getInstance();
var badSingleB = myBadSingleton.getInstance();
console.log(badSingleA.getRandomNumber() !== badSingleB.getRandomNumber());
// true

// Use in context
var SingletonTester = (function () {
  function Singleton(options) {
    options = options || {};
    this.name = "SingletonTester";
    this.pointX = options.pointX || 6;
    this.pointY = options.pointY || 10;
  }
  var instance;
  var _static = {
    name: "SingletonTester",
    getInstance: function(options) {
      if(instance === defined) {
        instance = new Singleton(options);
      }
      return instance;
    }
  }
  return_static;
}());

var singletonTest = SingletonTester.getInstance({ pointX: 5 });
console.log(singletonTest.pointX);
// Outputs: 5
