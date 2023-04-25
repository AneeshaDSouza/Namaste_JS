//callback functions

function attachEventListener(){
let count = 0;
document.getElementById("clickMe").
    addEventListener("click", xyz = () => {
        console.log("callback ", ++count);
    })
}
attachEventListener();