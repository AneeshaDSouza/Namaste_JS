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

let printMyName = person.printFullName.bind(person2);
printMyName();
//2------------------

let person3 ={
  firstname: "Aneesha",
  lastname: "dsouza",
  
}
let printName= function(){
  console.log(this.firstname + " "+ this.lastname);
}

 let a =printName.bind(person3);

let person4 ={
  firstname: "Jenisha",
  lastname: "Dsouza"
}
let b =  printName.bind(person4);


///3. if there are more parameters in the function then


let printaName= function(hometown, state){
  console.log(this.firstname + " "+ this.lastname+ " "+hometown+ " "+state);
}

let c =printaName.bind(person3, "hometown", "state");

let d = printaName.bind(person4, "hometown", "state");
d();
c();
b();
a();
