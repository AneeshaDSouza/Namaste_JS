//local storage

localStorage.setItem("hello","world");

localStorage.setItem("hello","world2");

localStorage.getItem("hello");

localStorage.removeItem("hello");

localStorage.clear();

let user = {
   name:"anny",
   add:"mangalore"

}

localStorage.setItem("user-copy", JSON.stringify(user));
let user2 =localStorage.getItem("user-copy");

console.log(JSON.parse(user2));




