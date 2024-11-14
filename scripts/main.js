// scripts/main.js

function filterPosts(category) {
    const posts = document.querySelectorAll('.post-card');
    posts.forEach(post => {
        // Show all posts if category is 'all', otherwise filter by category
        if (category === 'all' || post.getAttribute('data-category') === category) {
            post.style.display = 'block';
        } else {
            post.style.display = 'none';
        }
    });
}

// Filter posts by clicking on hashtags
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
