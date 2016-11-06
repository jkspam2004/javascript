function ResizeableArray () {
  var list = new Array(8);
  var size = 0;

  this.size = function() {
    return size;
  }

  //console.log(list.length);
}

ResizeableArray.prototype.size = function () {
  
}

mylist = new ResizeableArray();
console.log(mylist.size());
