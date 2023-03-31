function attachEvents() {
    const POSTS_URL = "http://localhost:3030/jsonstore/blog/posts";
    const COMMENTS_URL = "http://localhost:3030/jsonstore/blog/comments";

    let titleElement = document.getElementById("post-title");
    let bodyElement = document.getElementById("post-body");
    let selectElement = document.getElementById("posts");
    let loadPostsBtn = document.getElementById("btnLoadPosts");
    let viewPostBtn = document.getElementById("btnViewPost");

    let postInfo = {};

    loadPostsBtn.addEventListener("click", loadPosts);
    viewPostBtn.addEventListener("click", viewPost);

    function loadPosts() {
        fetch(`${POSTS_URL}`)
            .then((res) => res.json())
            .then((result) => {
                postInfo = result;
                selectElement.innerHTML = "";

                for (const [key, value] of Object.entries(result)) {
                    let optionElement = document.createElement("option");
                    optionElement.value = key;
                    optionElement.textContent = value.title;
                    selectElement.appendChild(optionElement);
                }
            });
    }

    function viewPost() {
        let post = selectElement.value;

        titleElement.textContent = postInfo[post].title;
        bodyElement.textContent = postInfo[post].body;

        fetch(`${COMMENTS_URL}`)
            .then((res) => res.json())
            .then((result) => {
                let commentsUl = document.getElementById("post-comments");
                commentsUl.innerHTML = "";

                let comments = Object.values(result).filter((x) => x.postId === post);

                comments.forEach((comment) => {
                    let commentElement = document.createElement("li");
                    commentElement.textContent = comment.text;
                    commentsUl.appendChild(commentElement);
                });
            });
    }
}

attachEvents();