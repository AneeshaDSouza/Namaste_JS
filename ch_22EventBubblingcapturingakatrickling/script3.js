
// stop propagation


document.querySelector("#grandparent").addEventListener('click', () =>{
    console.log("grandparent clicked");
 }, true);
 
 
 document.querySelector("#parent").addEventListener('click', (e) =>{
     console.log("parent clicked");
     e.stopPropagation();
  }, true);
 
  document.querySelector("#child").addEventListener('click', (e) =>{
     console.log("child clicked");
     e.stopPropagation();
  }, false);
