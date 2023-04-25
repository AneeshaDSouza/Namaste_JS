console.log("code 1");

function x(){

    var i =1;
    setTimeout(function(){
        console.log(i);
    }, 1000);
    console.log("nam js");
}
x();

console.log("code 2 print 1 after1 sec, 2 after 2 sec, till  5- this wont work");

function x() {
    for (var i = 1; i <= 5; i++) {
        setTimeout(function () {
            console.log(i);
        }, i * 1000);
    }
    console.log("nam js");
}
x();

console.log("this works");
function x() {
    for (let i = 1; i <= 5; i++) {
        setTimeout(function () {
            console.log(i);
        }, i * 1000);
    }
    console.log("nam js");
}
x();

console.log("this also works");
function x() {
    for (var i = 1; i <= 5; i++) {
      
        function close(x){
            setTimeout(function () {
                console.log(x);
            }, x * 1000);

        }

       close(i);
    }
    console.log("nam js");
}
x();