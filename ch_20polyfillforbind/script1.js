let person = {
  firstName: "Aneesha",
  lastname: "dsouza"

}

let printName = function (){
  console.log(this.firstName+" "+this.lastname);
}

let printMyName = printName.bind(person);
printMyName();


Function.prototype.mybind = function(...args){
// this points to function binded ie printName method here
   let obj = this;

  return function(){
    obj.call(args[0]);
  }
}


let printMyName2 = printName.mybind(person);
printMyName2();

// if there are arguments refer new page