const button = document.getElementById('button')

$(document).ready(function() {
    // Function to display blog posts from local storage
    function displayBlogPosts() {
        const blogstru = $('#blogstru');

        // Retrieve blog posts from local storage
        let blogPosts = JSON.parse(localStorage.getItem('blogPosts'));

        // Check if there are any blog posts in local storage
        if (blogPosts && blogPosts.length > 0) {
            // Loop through each blog post
            blogPosts.forEach(post => {
                // Create elements for displaying post content
                const postElement = $('<div></div>');
                const titleElement = $('<h2></h2>').text(post.title);
                const commentElement = $('<p></p>').text(post.comment);
                const usernameElement = $('<footer><footer>').text(post.username);

                // Append elements to post container
                postElement.append(titleElement, commentElement, usernameElement);

                // Append post container to the DOM
                blogstru.prepend(postElement);
            });
        } else {
            // Display a message if there are no blog posts in local storage
            blogstru.append('<p>No comments available.</p>');
        }
    }

    // Call the function to display blog posts
    displayBlogPosts();

    // Function to handle form submission
    function handleSubmit(event) {
        event.preventDefault(); // Prevent default form submission behavior

        // Get form values
        const title = $('.title').val();
        const comment = $('.comment').val();
        const username = $('.username').val();

        // Create blog post object
        const blogPost = {
            title: title,
            comment: comment,
            username: username
        };

        // Retrieve existing blog posts from local storage or initialize an empty array
        let blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

        // Add the new blog post to the array
        blogPosts.push(blogPost);

        // Store the updated array back in local storage
        localStorage.setItem('blogPosts', JSON.stringify(blogPosts));

        // Call function to display the new blog post
        displayBlogPosts();

        // Clear the form
        $('#blogForm')[0].reset();
    }

    // Attach form submission handler
    $('#blogForm').on('submit', handleSubmit);
    
    button.addEventListener('click', function (event){
    window.location.href = "index.html"
    });
});

function toggle() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 };