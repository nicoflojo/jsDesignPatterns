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
