// scripts/main.js

function togglePostContent(element) {
    const fullContent = element.nextElementSibling.nextElementSibling;
    if (fullContent.style.display === "none" || fullContent.style.display === "") {
        fullContent.style.display = "block";
    } else {
        fullContent.style.display = "none";
    }
}

function filterPosts(category) {
    const posts = document.querySelectorAll('.post-card');
    posts.forEach(post => {
        if (category === 'all' || post.getAttribute('data-category') === category) {
            post.style.display = 'block';
        } else {
            post.style.display = 'none';
        }
    });
}

// Hashtag filter
document.querySelectorAll('.hashtag').forEach(hashtag => {
    hashtag.addEventListener('click', function (event) {
        event.preventDefault();
        const tag = this.innerText.replace('#', '').toLowerCase();
        const posts = document.querySelectorAll('.post-card');
        
        posts.forEach(post => {
            const tags = post.getAttribute('data-tags').toLowerCase();
            if (tags.includes(tag)) {
                post.style.display = 'block';
            } else {
                post.style.display = 'none';
            }
        });
    });
});
