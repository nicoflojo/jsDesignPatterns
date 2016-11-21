// Mixin Pattern

var Person = function(firstName, lastName) {
  this.firstname = firstName;
  this.lastName = lastName;
  this.gender = "make";
};

var clark = new person("Clark", "Kent");

var Superhero = function(firstName, lastName, powers) {
  Person.call(this, firstName, lastName);
  this.powers = powers;
};

Superhero.prototype = Object.create(Person.prototype);
var superman = new Superhero("Clark", "Kent", ["flight", "heat vision", "flying"]);

console.log(superman);

// Mixin example

var myMixins = {
  moveUp: function() {
    console.log("move up");
  },
  moveDown: function() {
    console.log("move down");
  },
  stop: function() {
    console.log("stop! in the name of the love!");
  }
};


// Car Animator Skeleton

function CarAnimator() {
  this.moveleft = function() {
    console.log("Move Left");
  };
}

function PersonAnimator() {
  this.moveRandomly = function() {};
}

// Extend both constructors

_.extend(CarAnimator.prototype, myMixins);
_.extend(PersonAnimator.prototype, myMixins);

var myAnimator = new CarAnimator();
myAnimator.moveLeft();
myAnimator.movedown();
myAnimator.stop();
