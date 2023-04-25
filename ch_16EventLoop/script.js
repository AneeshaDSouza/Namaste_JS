//Event loop

console.log("Start");

setTimeout(() =>{
 console.log("CB setTimeout");
}, 5000);


    fetch("https://api.netflix.com")
.then(()=>{
    console.log("CB netflix");
});

console.log("End");

