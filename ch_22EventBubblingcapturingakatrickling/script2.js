//event capture

document.querySelector("#grandparent").addEventListener('click', () =>{
    console.log("grandparent clicked");
 }, true);
 
 
 document.querySelector("#parent").addEventListener('click', () =>{
     console.log("parent clicked");
  }, false);
 
  document.querySelector("#child").addEventListener('click', () =>{
     console.log("child clicked");
  }, false);