
var Car = function(settings) {
  this.model = settings.model || "no model provided";
  this.color = settings.color || "no colour provided";
};

var Mixin = function() {};

Mixin.prototype = {
  driveForward: function() {
    console.log("drive forward");
  },
  driveBackward: function() {
    console.log("drive backwards");
  },
  driveSideways: function() {
    console.log("drive sideways");
  }
};

// Extend one object from another
function augment(recievingClass, givingClass) {
  if (arguments[2]) {
    for (var i = 2, len = arguments.length; i < len; i++) {
      recievingClass.prototype[arguments[i]] = givingClass.prototype[arguments[i]];
    }
  } else {
    for (var methodName in givingClass.prototype) {
      if (!Object.hasOwnProperty.call(recievingClass.prototype, methodName)) {
        recievingClass.prototype[methodName] = givingClass.prototype[methodName];
      }
    }
  }
}

augment(Car, Mixin, "driveForward", "driveBackward");

var mySportsCar = new Car({
  model: "Ford Escort",
  color: "blue"
});

// Tests
myCar.driveForward();
myCar.driveBackward();
mySportsCar.driveSideways();
