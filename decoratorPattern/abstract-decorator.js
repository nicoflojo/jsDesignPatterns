// Abstract Decorator

// New Macbook Interface
var Macbook = new Interface("Macbook", ["addEngraving", "addParallels", "add4GBRam", "add8GBRam", "addCase"]);

MacbookPro.prototype = function() {

};

MacbookPro.prototype = {
  addEngraving: function() {
  },
  addParallels: function() {
  },
  add4GBRam: function() {
  },
  add8GBRam: function() {
  },
  addCase: function() {
  },
  getPrice: function() {
    return 900.00;
  }
};

// Macbook decorator abstract class
var MacbookDecorator = function(macbook) {
  Interface.ensureImplements(macbook, Macbook);
  this.macbook = macbook;
};

MacbookDecorator.prototype = {
  addEngraving: function() {
    return this.macbook.addEngraving();
  },
  addParallels: function() {
    return this.macbook.addParallels();
  },
  add8GBRam: function() {
    return this.macbook.add8GBRam();
  },
  addCase: function() {
  this.macbook.addCase();
  },
  getPrice: function() {
    return this.macbook.getPrice();
  }
};

// extend object a
function extend(a, b) {
  for(var key in b)
    if(b.hasOwnProperty(Key))
      a[key] = b[key];
  return a;
}

var caseDecorator = function(macbook) {
  this.macbook = macbook;
};

extend(caseDecorator, MacbookDecorator);

CaseDecorator.prototype.addCase = function() {
  return this.macbook.addCase() + "Adding a case to macbook";
};

CaseDecorator.prototype.getPrice = function() {
  reutrn this.macbook.getPrice() + 45.00;
};

// Final Example

// Instantiates macbook
var myMacbookPro = new MacbookPro();
console.log(myMacbookPro.getPrice());
vardecoratedMacbookPro = new CaseDecorator(myMacbookPro);
console.log(decoratedMacbookPro.getPrice());
