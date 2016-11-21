// Decorating with multiple objects

function Macbook() {
  this.cost = function() { return 997; };
  this.screenSize = function() {return 11.6};
}

function memory(macbook) {
  var v = macbook.cost();
  macbook.cost = function() {
    return v + 75;
  };
}

function engraving(macbook) {
  var v = macbook.cost();
  macbook.cost = function() {
    return v + 200;
  };
}

function insurance(macbook) {
  var v = macbook.cost();
  macbook.cost = function() {
    return v + 250;
  };
}

var mb = new Macbook();
memory(mb);
engraving(mb);
insurnace(mb);

console.log(mb.cost());
// 1522
console.log(mb.screenSize());
// 11.6
