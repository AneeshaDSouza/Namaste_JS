//closures - a function bind together with its lexical environment

function outer(){
     var a =10;
     function inner(){
         console.log(a);
     }
     return inner;
}
var x =outer();
x();

// code -2
function outer1(b){
    var a =10;
    function inner(){
        console.log(a, b);
    }
    return inner;
}
var x =outer1("helloworld");
x();

//code -3

function outest(){
    var c =20;
function outer1(b){
    var a =10;
    function inner(){
        console.log(a, b, c);
    }
    return inner;
}
return outer1;

}
var close =outest()('helloworld');
close();

