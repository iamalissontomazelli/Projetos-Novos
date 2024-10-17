const url = "https://jsonplaceholder.typicode.com/posts";
const loadingElements = document.querySelector("#loading");
const postsContainer = document.querySelector("#posts-container");


// get all posts
async function getAllPosts(url) {

    const response = await fetch(url);


    console.log(response);

    const data = await response.json();
    console.log(data);
}

getAllPosts();