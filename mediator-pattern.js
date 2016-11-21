// Mediator Pattern
var orgChart = {
  addNewEmployee: function() {
    var employeeDetail = this.getEmployeeDetail();
    employeeDetail.on("complete", function(employee) {
      var managerSelector = this.selectManager(employee);
      managerSelector.on("save", function(employee) {
        employee.save();
      });
    });
  },
  // ...
}

// Mediator set up as event aggregato

var MenuItem = MyFrameworkView.extend({
  events: {
    "click .thatThing": "clickedIt"
  },
  clickedIt: function(e) {
    e.preventDefault();
    MyFramework.trigger("menu:click:" + this.model.get("name"));
  }
});

// Somewhere else

var MyWorkflow = fucntion() {
  myFramework.on("menu:click:foo", this.doStuff, this);
};

MyWorkflow.prototype.doStuff = function() {
  // instantiate multiple objects.
  // set up event handlers for those objects.
  // coordinate all of the objects into meaningful workflow.
};
