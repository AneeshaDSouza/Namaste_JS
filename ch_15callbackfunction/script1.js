//callback functions

function attachEventListener(){
let count = 0;
document.getElementById("clickMe").
    addEventListener("click", xyz = () => {
        console.log("Button clicked", ++count);
    })
}
attachEventListener();