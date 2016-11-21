// Decorator Pattern

function Vehicle(vehicleType) {
  this.vehicleType = vehicleType || "car";
  this.model = "default";
  this.license = "0000-000";
}

var testIntance = new Vehicle("car");
console.log(testInstance);

// Decorated new instance
var truck = new Vehicle("truck");

truck.setModel = function(modelName) {
  this.model = modelName;
};

truck.setColor = function(color) {
  this.color = color;
};

truck.setModel("Cat");
truck.setColor("blue");
console.log(truck);
// vehicle: truck, model:Cat, color: blue

// demonstrate vehicle is unaltered
var secondInstance = new Vehicle("Car");
console.log(secondInstance);
// vehicle: car, model: default, license: 00000-000
