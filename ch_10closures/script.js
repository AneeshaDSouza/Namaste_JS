//closures - a function bind together with its lexical environment

console.log("code 1");
function x(){
    var a =7;

    function y(){
        console.log(a);
    }
    y();
}
x();

console.log("code 2");
function x1(){
    var a1 =7;

    function y1(){
        console.log(a1);
    }
    a1 =8;
    return y1;

}
var a1 =9;
var z1 =x1();
z1(); // functions when they r returned maintain their lexical scope so when they r called later pont of time tsill will
//have value of a1 -output will be 8 here.. (not 9 coz of shadowing, 8 because points to rferenece)
//or x1()();

console.log("code 3");
function z(){
    var b2 = 10;
function x1(){
    var a1 =7;

    function y1(){
        console.log(a1);
        console.log(b2);
    }
    a1 =8;
     y1();

}
x1();
}
z();


