// Modules

// Module being defined by object literal notation

var myModule = {
  myProperty: "someValue",
  myConfig: {
    useCaching: true,
    language: "en"
  },
  saySomething: function () {
    console.log("Where in the wrold is Paul Irish today?");
  },
  reportMyConfig: function () {
    console.log("Caching is: " + (this.myConfig.useCaching ? "enabled" : "disabled"));
  },
  // overide current configuration
  updateMyConfig: function(newConfig) {
    if (typeof newConfig === "object") {
      this.myConfig = newConfig;
      console.log(this.myConfig.language);
    }
  }
};

myModule.saySomething();
// Where in the world is Paul Irish today?
myModule.reportMyConifg();
// Caching is: enabled
myModule.updateMyConfig({
  language: "fr",
  useCaching: false
});
// fr
myModule.reportMyConfig();
// Caching is disabled

// Example self-contained module

var testModule = (function () {
  var counter = 0;
  return {
    incrementCounter: function () {
      return counter++;
    },
    resetCounter: function () {
      console.log("counter value prior to reset: " + counter);
      counter = 0;
    }
  };
})();

// usage:
// increment our counter
testModule.incrementCounter();
// check value and reset
testModule.resetCounter();
// counter value prior to reset: 1

// example of namespacing, public + private variables

var myNamespace = (function() {
  var myPrivateVar, myPrivateMethod;
  myPrivateVar = 0;
  myPrivateMethod = function(foo) {
    console.log(foo);
  };
  return {
    myPublicVar: "foo",
    myPublicFunction: function(bar) {
      myPrivateVar++;
      myPrivateMethod(bar);
    }
  };
})();


// basket module Example

var basketModule = (function() {
  var basket = [];
  function doSomethingPrivate() {

  }
  function doSomethingElsePrivate() {

  }
  return {
    addItem: function(values) {
      basket.push(values);
    },
    getItemCount: function() {
      return basket.length;
    }
    doSomething: doSomethingPrivate,
    getTotal: function () {
      var q = this.getItemCount(),
      p = 0;
      while (q--) {
        p += basket[q].price;
      }
      return p;
    }
  };
}());


basketModule.addItem({
  item: "bread",
  price: 0.5
});

basketModule.addItem({
  item: "butter",
  price: 0.3
});

console.log(basketModule.getItemCount());
// 2
console.log(basketModule.getTotal());
// .8
console.log(basketModule.basket);
//undefined
console.log(basket);
// undefined
