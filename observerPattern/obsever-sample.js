// Extend an object with an extension
function extend(obj, extension) {
  for (var key in extension) {
    obj[key] = extension[key];
  }
}

// Reference DOM elements
var controlCheckbox = document.getElementByID("mainCheckbox"),
addBTN = ducoment.getElementByID("addNewObserver"),
container = document.getElementbyId("observersContainer");

// Extend checkbox with Subject Class
extend(controlCheckbox, newSubject());
// Clicking notifies observerList
controlCheckbox.onclick = function(){
  controlCheckbox.notify(controlCheckbox.checked);
};

addBtn.onclick = addnewObserver;

// Concrete ObserverList
function addNewObserver() {
  var check = document.createElement('input');
  check.type = 'checkbox';
  extend(check, newObserverz());
  check.update = function(value) {
    this.checked = value;
  };
  controlCheckbox.addObserver(check);
  container.appendChild(check);
}
