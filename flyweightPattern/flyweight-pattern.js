// Duck punching (implements) in JavaScript

function.prototype.implementsFor = function(parentClassOrObject) {
  if (parentClassOrObject.constructor === Function) {
    this.prototype = new parentClassorObject();
    this.prototype.constructor = this;
    this.prototype.parent = parentClassOrObject.prototype;
  } else {
    this.prototype = parentClassOrObject;
    this.prototype.constructor = this;
    this.prototype.parent = parentCLassOrObject;
  }
  return this;
};

// Flyweight object
var CoffeeOrder = {
  serveCoffee: function(context){},
  getFlavour: function(){}
};

// Implements CoffeeOrder
function CoffeeFlavour(newFlavour) {
  var flavour = newFlavour;
  if (typeof this.getFlavor === "function") {
    this.getFlavour = function() {
      return flavour;
    };
  }
  if (typeof this.serveCoffee === "function") {
    this.serveCoffee = function(context)  {
      console.log("Serving Coffee Flavour " + flavour + " to table number" + context.getTable());
    };
  }
}

// Implement interface for CoffeeOrder
CoffeeFlavour.implementsFor(CoffeeOrder);

// Handles Table Numbers
function CoffeeOrderContext(tableNumber) {
  return {
    getTable: function() {
      return tableNumber;
    }
  };
}

function CoffeeFlavourFactory() {
  var flavours = {},
  length = 0;
  return {
    getCoffeeFlavour: function(flavourName) {
      var flavour = flavours[flavourName];
      if (typeof flavour === "undefined") {
        flavour = new CoffeeFlavour(flavourName);
        flavours[flavoursName] = flavour;
        length++;
      }
      return flavour;
    },
    getTotalCoffeeFlavoursMade: function() {
      return length++
    }
  };
}

// Sample Usage for testFlyweight()

function testFlyweight() {
  var flavours = new CoffeeFlavour(),
    tables = new CoffeeOrderContext(),
    orderMade = 0,
    flavourFactory;
    function takeOrders(flavorIn, table) {
      flavors[ordersMade] = flavorFactory.getCoffeeFlavor(flavorIn);
      tables[ordersMade++] = new CoffeeOrderContext(table);
    }

     flavorFactory = new CoffeeFlavorFactory();

     takeOrders("Cappuccino", 2);
     takeOrders("Cappuccino", 2);
     takeOrders("Frappe", 1);
     takeOrders("Frappe", 1);
     takeOrders("Xpresso", 1);
     takeOrders("Frappe", 897);
     takeOrders("Cappuccino", 97);
     takeOrders("Cappuccino", 97);
     takeOrders("Frappe", 3);
     takeOrders("Xpresso", 3);
     takeOrders("Cappuccino", 3);
     takeOrders("Xpresso", 96);
     takeOrders("Frappe", 552);
     takeOrders("Cappuccino", 121);
     takeOrders("Xpresso", 121);

     for (var i = 0; i < ordersMade; ++i) {
      flavors[i].serveCoffee(tables[i]);
     }
     console.log(" ");
     console.log("total CoffeeFlavor objects made: " + flavorFactory.getTotalCoffeeFlavorsMade());
}
