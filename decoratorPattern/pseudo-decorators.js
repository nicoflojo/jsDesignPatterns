// interfaces using duck typing

var reminder = new Interface("List", ["summary", "placeOrder"]);

var properties = {
  name: "Remember to buy milk",
  date: "05/06/2016",
  actions: {
    summary: function() {
      return "Remember to buy the milk, we are almost out";
    },
    placeOrder: function () {
      return "Ordering milk from your local grocery store";
    }
  }
};

function Todo(config) {
  Interface.ensureImplements(config.actions, reminder);
  this.name = config.name;
  this.methods = config.actions;
}

var todoItem = new Todo(properties);

console.log(todoItem.methods.summary());
console.log(todoItems.methods.placeOrder());
