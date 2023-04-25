/*let multiply = function(x,y){
  console.log(x*y);
}
let multiplyByTwo = mulitply.bind(this, 2);
multiplyByTwo(2);

let multiplyByTwo1 = mulitply.bind(this, 2, 3);

let multiplyByThree = mulitply.bind(this, 3);
multiplyByThree(2);
*/

let multiply = function(x){

  return function(y){
    console.log(x*y);
  }

}

let multiplyByTwo = multiply(2);
multiplyByTwo(8);
let multiplyByThree = multiply(3);
multiplyByThree(6);



//currying and closures

