const commentBlog = async (event) => {
    // Stop the browser from submitting the form so we can do so with JavaScript
    event.preventDefault();

  const comment = document.querySelector("#comment").value
//   const blog_id = document.querySelector("#post_id").value

    const response = await fetch('/api/comment/:blog_id', {
        method: 'POST',
        body: JSON.stringify({ comment}),
        headers: { 'Content-Type': 'application/json' },
      });

    if(response.ok){
        alert("Successfully submitted new comment")
    } else {
        alert("New comment submission failed")  
    }
  };
  
  document
    .querySelector('.comment-form')
    .addEventListener('submit', commentBlog);