let person ={
  firstname: "Aneesha",
  lastname: "dsouza",
  printFullName: function(){
    console.log(this.firstname + " "+ this.lastname);
  }

}
person.printFullName();

let person2 ={
  firstname: "Jenisha",
  lastname: "Dsouza"
}
//using call method we can do function borrowing ie borrow the function from other objects
// and use it with data of other objects

person.printFullName.apply(person2);
//2------------------

let person3 ={
  firstname: "Aneesha",
  lastname: "dsouza",
  
}
let printName= function(){
  console.log(this.firstname + " "+ this.lastname);
}

printName.apply(person3);

let person4 ={
  firstname: "Jenisha",
  lastname: "Dsouza"
}
printName.apply(person4);

///3. if there are more parameters in the function then


let printaName= function(hometown, state){
  console.log(this.firstname + " "+ this.lastname+ " "+hometown+ " "+state);
}

printaName.apply(person3, ["hometown", "state"]);

printaName.apply(person4, ["hometown", "state"]);
