var x = {
    a: {
      b: 2
    }
  };
  // 2 objects are created. One is referenced by the other as one of its properties.
  // The other is referenced by virtue of being assigned to the 'x' variable.
  // Obviously, none can be garbage-collected.
  
  var y = x;      // The 'y' variable is the second thing that has a reference to the object.
  
  x = 1;          // Now, the object that was originally in 'x' has a unique reference
                  //   embodied by the 'y' variable.
  
  var z = y.a;    // Reference to 'a' property of the object.
                  //   This object now has 2 references: one as a property,
                  //   the other as the 'z' variable.
  
  y = 'mozilla';  // The object that was originally in 'x' has now zero
                  //   references to it. It can be garbage-collected.
                  //   However its 'a' property is still referenced by
                  //   the 'z' variable, so it cannot be freed.
  
  z = null;       // The 'a' property of the object originally in x
                  //   has zero references to it. It can be garbage collected.

//Circular reference
function f() {
    var x = {};
    var y = {};
    x.a = y;        // x references y
    y.a = x;        // y references x
  
    return 'azerty';
  }
  
  f();
  //real life eg
  var div;
window.onload = function() {
  div = document.getElementById('myDivElement');
  div.circularReference = div;
  div.lotsOfData = new Array(10000).join('*');
};

