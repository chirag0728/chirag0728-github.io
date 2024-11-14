document.addEventListener("DOMContentLoaded", async function() {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get("post");

    if (postId) {
        try {
            const response = await fetch(`posts/${postId}.md`);
            if (response.ok) {
                const markdown = await response.text();
                const postContentDiv = document.getElementById("post-content");

                // Convert markdown to HTML using marked.js
                postContentDiv.innerHTML = marked(markdown);
            } else {
                document.getElementById("post-content").textContent = "Post not found.";
            }
        } catch (error) {
            document.getElementById("post-content").textContent = "Error loading post.";
        }
    }
});
