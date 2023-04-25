
//shadowing

var a =10;
console.log("code 1");
{
    var a = 1;
    let b = 3;
    const c = 5;
    console.log(a);// o/p value 1 will b printed
    console.log(b);
    console.log(c);
}

console.log(a); // value 10 is shadowed by value 1 . output is 1
/*console.log(b);// here it will stop nd give error
console.log(c); */
 
//shadowing in functions
console.log("code 2");
var a1 =10;
let b1 = 100;
const c1 = 1000;
function z(){
    var a1 = 1;
    let b1 = 3;
    const c1 = 5;
    console.log(a1);// o/p value 1 will b printed
    console.log(b1);
    console.log(c1);
}
z();

console.log(a1); // value 10 is shadowed by value 1 . output is 1
console.log(b1);// here it will stop nd give error
console.log(c1);

///illegal shadowing
/*let a3 = 10;
console.log("code 3");
{
    var a3 = 1;
    console.log(a3);// o/p value 1 will b printed
}*/

//legal;
let a4 = 10;
console.log("code 4");
{
    let a4 = 1;
    console.log(a4);// o/p value 1 will b printed
}

//legal;
var a5 = 10;
console.log("code 5");
{
    let a5 = 1;
    console.log(a5);// o/p value 1 will b printed
}

//legal
let a6 = 10;
console.log("code 6");
function aa(){
    var a6 = 1;
    console.log(a6);// o/p value 1 will b printed
}
aa();