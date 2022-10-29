const commentBlog = async (event) => {
    // Stop the browser from submitting the form so we can do so with JavaScript
    event.preventDefault();

  const comment = document.querySelector("#exampleFormControlTextarea1").value
  const id = document.querySelector("#post_id").value

    const response = await fetch('/api/comment/new', {
        method: 'POST',
        body: JSON.stringify({ comment, id }),
        headers: { 'Content-Type': 'application/json' },
      });

    if(response.ok){
        alert("Successfully submitted new comment")
    } else {
        alert("New comment submission failed")  
    }
  };
  
  document
    .querySelector('.blog-comment')
    .addEventListener('submit', commentBlog);