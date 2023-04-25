//closures - data hiding

function counter(){
var count =0;

function incrementCounter(){
    count++;
    console.log(count);

}
return incrementCounter;
}

var counter1 = counter();
counter1();
counter1();
var counter2 = counter();
counter2();

/// using constructor

function Counter() {
    var count = 0;
    this.incrementCounter = function () {
        count++;
        console.log(count);
    }
    this.decrementCounter = function () {
        count--;
        console.log(count);
    }

}
var counter3 = new Counter();
counter3.incrementCounter();
counter3.incrementCounter();
counter3.incrementCounter();
counter3.decrementCounter();
