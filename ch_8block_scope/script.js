
//block is defined by curly braces

console.log("code 1");
{
    console.log(b);
    var a = 10;
    let b = 10;
    console.log(a);
}
//output- b undefined. a 10

console.log("code 2");
/*
console.log(b1);
    var a1 = 10;
    let b1 = 10;
    console.log(a1);
*/
// here we get error for b1 can access before initialize

console.log("code 3");
{
    var a2 = 1;
    let b2 = 3;
    const c2 = 5;
    console.log(a2);
    console.log(b2);
    console.log(c2);
}

console.log(a2);
console.log(b2);// here it will stop nd give error
console.log(c2);
 