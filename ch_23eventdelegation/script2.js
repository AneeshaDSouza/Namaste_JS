//event capture


document.querySelector("#form").addEventListener('click', (e) =>{
   console.log(e);
   if(e.target.dataset.uppercase != undefined)
     e.target.value = e.target.value.toUpperCase();

   console.log("category parent clicked"+e.target);

});