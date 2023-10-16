//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


let searchButton = document.getElementById("searchbutton");

// searchButton.addEventListener("click", search_blogs);

// Get the input field
// let searchBox = document.getElementById("searchbox");
// // Execute a function when the user presses a key on the keyboard
// searchBox.addEventListener("keypress", function(event) {
//   // If the user presses the "Enter" key on the keyboard
//   if (event.key === "Enter") {
//     // Cancel the default action, if needed
//     event.preventDefault();
//     // Trigger the button element with a click
//     document.getElementById("searchbutton").click();
//   }
// });


// function search_blogs() {
//     // window.alert("Hello")
//     window.location.href = "search.html";

//     // let input = document.getElementById('searchbox').value

//     // const searchBlogs = (keyword, blogs) => {
//     //     return blogs.filter(blog => blog.title.toLowerCase().includes(keyword.toLowerCase()));
//     //   };
// }


// fetch(`./blogs.JSON`)
//     .then(res => res.json()).then(data => {
//         console.log(data);
//         const blogPosts = [
//             {blogTitle : data.title, blogCategory : data.category, blogContent : data.content,blogAuthor : data.author,}
//         ];

//         // const blogPosts = [
//         //     { title: 'First Blog Post', content: 'This is the content of the first blog post.' },
//         //     { title: 'Second Blog Post', content: 'Content for the second blog post goes here.' },
//         //     // Add more blog posts as needed
//         //   ]

//         function searchBlogs(keyword) {
//             const matchingBlogs = blogPosts.filter(post => {
//                 const postContent = post.content.toLowerCase();
//                 return postContent.includes(keyword.toLowerCase());
//             });
//             return matchingBlogs;
//         }
        
//         const searchInput = document.getElementById('searchInput');
//         const searchResults = document.getElementById('searchResults');
        
//         searchInput.addEventListener('input', () => {
//             const userInput = searchInput.value;
//             const matchingBlogs = searchBlogs(userInput);
//             displayResults(matchingBlogs);
//         });
        
//         function displayResults(results) {
//             searchResults.innerHTML = ''; // Clear previous results
//             results.forEach(blog => {
//                 const post = document.createElement('div');
//                 post.setAttribute("class", "card h-100");
        
        
//                 post.innerHTML = `
//             <a href="single.html"><img src="asset/img/logo.png" class="card-img-top" width="200" height="200"
//                 alt="..."></a>
//             <div class="card-body">
//               <h5 class="card-title">`+ blog.blogTitle + `</h5>
//               <strong class="d-inline-block mb-2 text-primary">IT</strong>
//               <p class="card-text">`+ blog.BlogContent + `</p>
//               <a href="single.html" class="stretched-link">Continue reading</a>
//             </div>
//             <div class="card-footer">
//               <small class="text-muted"><a href="profile.html">`+ blog.blogAuthor + `</a></small>
//               <small class="text-muted ms-3"><i class="fa fa-eye" aria-hidden="true"></i></small>
//             </div>`;
//                 searchResults.appendChild(post);
        
        
//                 //   <strong>${blog.title}:</strong>
//                 //   ${blog.content}
//                 //   searchResults.appendChild(listItem);
//             })
        
//             document.getElementById("result").innerHTML = "";
//             document.getElementById("result").innerHTML = "result on your " + searchInput.value + "";
//             ;
//         }
//     }).catch((err) => console.error(err));

const blogPosts = [
    { title: 'First Blog Post', content: 'This is the content of the first blog post.' },
    { title: 'Second Blog Post', content: 'Content for the second blog post goes here.' }
];

function searchBlogs(keyword) {
    const matchingBlogs = blogPosts.filter(post => {
        const postContent = post.content.toLowerCase();
        return postContent.includes(keyword.toLowerCase());
    });
    return matchingBlogs;
}

const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

searchInput.addEventListener('input', () => {
    const userInput = searchInput.value;
    const matchingBlogs = searchBlogs(userInput);
    displayResults(matchingBlogs);
});

function displayResults(results) {
    searchResults.innerHTML = ''; // Clear previous results
    results.forEach(blog => {
        const post = document.createElement('div');
        post.setAttribute("class", "card h-100");


        post.innerHTML = `
    <a href="single.html"><img src="asset/img/logo.png" class="card-img-top" width="200" height="200"
        alt="..."></a>
    <div class="card-body">
      <h5 class="card-title">`+ blog.title + `</h5>
      <strong class="d-inline-block mb-2 text-primary">IT</strong>
      <p class="card-text">`+ blog.content + `</p>
      <a href="single.html" class="stretched-link">Continue reading</a>
    </div>
    <div class="card-footer">
      <small class="text-muted"><a href="profile.html">`+ blog.blogAuthor + `</a></small>
      <small class="text-muted ms-3"><i class="fa fa-eye" aria-hidden="true">`+ blog.blogViews + `</i></small>
    </div>`;
        searchResults.appendChild(post);


        //   <strong>${blog.title}:</strong>
        //   ${blog.content}
        //   searchResults.appendChild(listItem);
    })

    document.getElementById("result").innerHTML = "";
    document.getElementById("result").innerHTML = "result on your " + searchInput.value + "";
    ;
}



