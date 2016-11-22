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
