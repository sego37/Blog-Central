const usernameEl = document.getElementById('username')
const titleEl = document.getElementById('title')
const commentEl = document.getElementById('comment')
const submitbtEl = document.getElementById('submitbt')




if (!localStorage.getItem("blogPosts")) {
    localStorage.setItem('blogPosts', JSON.stringify([]))
}


submitbt.addEventListener('click', function (event) {
    event.preventDefault();

    let blogPosts = JSON.parse(localStorage.getItem("blogPosts"))

    const username = usernameEl.value
    const title = titleEl.value 
    const comment = commentEl.value

    const blogPostObj = {
        username,
        title,
        comment,
    }
    
    blogPosts.push(blogPostObj)

    localStorage.setItem('blogPosts', JSON.stringify(blogPosts))
 window.location.href = "blog.html"
})
seeposts.addEventListener('click', function (event){
    window.location.href = "blog.html"
    });

    
function toggle() {
   var element = document.body;
   element.classList.toggle("dark-mode");
};