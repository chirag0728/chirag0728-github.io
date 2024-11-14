// Toggle post content visibility on the main page
function togglePostContent(element) {
    const postContent = element.nextElementSibling.nextElementSibling;
    postContent.style.display = postContent.style.display === "none" ? "block" : "none";
}

// Function to navigate to the full post page
function viewFullPost(postId) {
    window.location.href = `post.html?post=${postId}`;
}

// Event listeners for filtering posts based on categories
function filterPosts(category) {
    const allPosts = document.querySelectorAll(".post-card");

    allPosts.forEach(post => {
        if (category === 'all' || post.dataset.category === category) {
            post.style.display = "block";
        } else {
            post.style.display = "none";
        }
    });
}

// DOMContentLoaded event to attach click event listeners
document.addEventListener("DOMContentLoaded", function() {
    const readMoreButtons = document.querySelectorAll(".post-card button");

    readMoreButtons.forEach(button => {
        button.addEventListener("click", function(event) {
            const postId = event.target.closest(".post-card").getAttribute("data-id");
            viewFullPost(postId);  // Navigate to the full post page
        });
    });
});
