// Jquery Decorators

var decoratorApp = decoratorAPp || {};

decoratorApp = {
  defaults: {
    validate: false,
    limit: 5,
    name: "foo"
    welcome: function() {
      console.log("welcome!");
    }
  },
  options: {
    validate: true,
    name: "bar",
    helloWorld: function() {
      console.log("Hello world");
    }
  },
  settings: {},
  printObj: function(obj) {
    var arr = [];
    next;
    $.each(obj, function(key, val) {
      next = key + ": ";
      next += $.isPlainObject(val) ? printObj(val) : val;
      arr.push(next);
    });
    return "{ " + arr.join(", ") + " }";
  }
};
