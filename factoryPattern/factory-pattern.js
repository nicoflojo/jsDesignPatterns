// Factory Pattern

// constructor defines new cars
function Car(options) {
  this.doors = options.doors || 4;
  this.date = options.state || "brand new";
  this.color = options.color || "silver";
}

//  contructor for new trucks

function Truck(options) {
  this.state = options.state || "used";
  this.wheelSize = options.wheelSize || "large";
  this.color = options.color || "blue";
}

// FactoryExample.js
function VehicleFactory() {}

// define defaults
VehicleFactory.prototype.vehicleClass = Car;

// Factory Method for creating vehicleClass

VehicleFactory.prototype.createVehicle = function(options) {
  switch(options.vehicleType) {
    case "car":
      this.vehicleClass = Car;
      break;
    case "truck":
      this.vehicleClass = Truck;
      break;
  }
  return new this.vehicleClass(options);
};

// Create an instance of our Factory
var carFactory = new VehicleFactory();
var car = carFactory.createVehicle({
  vehicleType: "car",
  color: "yellow",
  doors: 6
});

// Test
console.log(car instanceof Car);
// true
console.log(car);
// vehicleType: "car", color: "yellow", doors: 6

// Modify VehicleFactory to use Truck class
var movingTruck = carFatory.createVehicle({
  vehicleType: "truck",
  state: "like new",
  color: "red",
  wheelSize: "small"
});

console.log(movingTruck instanceof Truck);
// true
console.log(movingTruck);

// Subclass VehicleFactory to create a factory class that builds trucks
function TruckFactory () {}
TruckFactory.prototype = new VehicleFactory();
TruckFactory.prototype.vehicleClass = Truck;

var truckFactory = new TruckFactory();
var myBigTruck = truckFactory.createVehicle({
  state: "horrible",
  color: "pink",
  wheelSize: "so big"
});

console.log(myBigTruck instanceof Truck);
// true
console.log(MyBigTruck);
