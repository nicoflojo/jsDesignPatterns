// Abstract Factory Pattern

var abstactVehicleFactory = (function () {
  // Storage for vehicle types
  var types = {};
  return {
    getVehicle: function(type, customizations) {
      var vehicle = types[type];
      return(Vehicle ? new Vehicle(customizations) : null);
    },
    registerVehicle: function(type, Vehicle) {
      var proto = Vehicle.prototype;
      if (proto.drive && proto.breakDown) {
        types[type] = Vehicle;
      }
      return abstractVehicleFactory;
    }
  };
}());

abstractVehicleFactory.registerVehicle("car", Car);
abstractVehicleFactory.registerVehicle("truck", Truck);
var car = abstractVehicleFactory.getVehicle("car", {
  color: "lime green",
  state: "like new"
});

var truck = abstractVehicleFactory.getVehicle("truck", {
  wheel: "medium",
  color: "neon yellow"
});
