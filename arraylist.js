function ResizeableArray () {
  var list = new Array(8);
  var size = 0; // this should be private

  this.size = function() {
    return size;
  }

  //console.log(list.length);
}

ResizeableArray.prototype.size = function () {
  
}

mylist = new ResizeableArray();
console.log(mylist.size());


/* note: use closures to access a private variable in a function */
