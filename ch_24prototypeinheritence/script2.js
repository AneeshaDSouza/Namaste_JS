//recursive thinking

//question

let user = {

  name :"Anny",
  address: {
     personal:{
       city:"mangalore",
       pin: "574"
     },
     office :{
       city: "hyd",
       area: {
         landmark :"test"
       }
     }
  }
}

//output 
/*let final_obj ={
  user_name : "Anny",
  user_address_personal_city: "mangalore"
  
}*/
let finalobj = {};
function magicfun(obj, parent) {
  for (let key in obj) {
    if (typeof obj[key] === 'object') {
      parent = parent + "_" + key;
      magicfun(obj[key], parent);
    }
    else {
      finalobj[parent + "_" + key] = obj[key];
    }
  }
}

 magicfun(user, "user");