//sum(1)(2)(3)(4)(5)...(n)()

//eg sum(1)(2)() =3

let sum1 = (a)=>{

  return  (b) =>{

    return b? (sum(a+b)):  a;

   
  }
}



let sum = a => b =>  b? sum(a+b):a;

let result = sum(1)(2)(3)(4)(5)();

console.log(result);

