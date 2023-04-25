const posts = [
  {
    title: "Post One",
    body: "This is post one",
  },
  {
    title: "Post Two",
    body: "This is post one",
  },
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `
                <li> ${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPosts(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      const error = false;
      if (!error) {
        resolve();
      } else {
        reject("something went wrong");
      }
    }, 2000);
  });
}
//getPosts();
/*
createPosts({ title: "Post Three", body: "This is post 3" })
  .then(getPosts)
  .catch((err) => console.log(err));
  */

//Promise.all scenario
/*
const promise1 = Promise.resolve("Hello World");
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, "Goodbye");
});

const promise4 = fetch(
  "https://jsonplaceholder.typicode.com/users"
).then((response) => response.json());
Promise.all([promise1, promise2, promise3, promise4]).then((values) => {
  console.log(values);
});
*/


//Async -await

async function init(){
   await createPosts({ title: "Post Three", body: "This is post 3" });
   getPosts();
}
init();

//Asyn - await fetch
async function fetchUsers(){
const resposne = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  const data = await resposne.json();
  console.log(data);
}
fetchUsers();