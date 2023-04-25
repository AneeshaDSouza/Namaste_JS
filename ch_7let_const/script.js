
//Lexical environment is the local memory along with lexical environemnt of it s parent

//let and const and temporal deadzone 
//let and const are housted but in temporal dead zone

console.log(b);
console.log(a);
let a =10;
var b =100;

// output - undefined and error: cannot access a before initialization(reference error)
// memory is allocated to a but it is in script scope, not global scope/object
// we cant access before initialization
//tempral dead zone - time between let variable hoisted nd initialized ()

//eg 2

let a1 = 10;
let a1 = 100;

//redeclaration is not allowed
//syntax error - it is already declared

const b1;
b1 = 1000;

// syntax error : missing initializer in const declaration

const b2 =10;
b2=100;
//typeerror : assignment to constant variable