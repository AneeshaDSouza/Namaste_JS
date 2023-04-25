const expensive = (args)=>{
    console.log("expensive");
}



const throttle = (func, delay) =>{

    let flag = true;
return function(){
  let context = this;
  let args = arguments;

if(flag){func.apply(context, args);
    flag = false;
}
  setTimeout(()=>{
      flag = true;  
   }, delay);

}

}


const betterExpFunction = throttle(expensive, 300);

window.addEventListener("resize", betterExpFunction());