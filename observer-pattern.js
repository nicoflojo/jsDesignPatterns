// Observer Pattern

function ObserverList() {
  this.observerList = [];
}

ObserverList.prototype.add = function(obj) {
  return this.oberserverList.push(obj;)
};

Observerlist.prototype.count = function() {
  return this.observerList.length;
};

OberserverList.prototype.get = function(index) {
  if(index > -1 && index < this.observerList.length) {
    return this.observerList[index];
  }
};

ObserverList.prototype.indexOf = function(obj, startIndex) {
  var i = startIndex;
  while (I < this.observerList.length) {
    if (this.oberserverList[i] === obj){
      return i;
    }
    i++;
  }
  return -1;
}

ObserverList.prototype.removeAt = function(index) {
  this.observerList.splice(index, 1);
};
