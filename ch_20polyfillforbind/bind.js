let person = {
  firstName: "Aneesha",
  lastname: "dsouza"

}

let printName = function (hometown, state){
  console.log(this.firstName+" "+this.lastname+ " "+ hometown + "  "+state);
}

let printMyName = printName.bind(person);
printMyName("hometown", "Uttarakhand");


Function.prototype.mybind = function(...args){
// this points to function binded ie printName method here
   let obj = this;
   params = args.slice(1);

  return function(...args2){
    obj.apply(args[0],[...params, ...args2]);
  }
}


let printMyName2 = printName.mybind(person, "hometown");
printMyName2("state");

// if there are arguments refer new page

//Polyfill for call, apply and bind
unction.prototype.myCall = function (thisContext, ...args) {
  // Write your code here.
  //In order to have 'thisConetxt' to be the 'this' context
  //of original function, we set the function ('this')
  //to be value on 'thiscontext' and we use a symbol to
  //prevent any key collisions on 'thiscontext'.
  const symbol = Symbol();
  thisContext[symbol] = this;

  const returnValue = thisContext[symbol](...args);
  delete thisContext[symbol];
  return returnValue;
};

Function.prototype.myApply = function (thisContext, args = []) {
  // Write your code here.
  return this.myCall(thisContext, ...args)
};

Function.prototype.myBind = function (thisContext, ...args) {
 
// this points to function binded ie printName method here
   let obj = thisContext;
   //params = args.slice(1);

  return (...args2) => this.myApply(thisContext,[...args, ...args2]);
  

};