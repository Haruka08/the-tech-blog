const commentBlog = async (event) => {
    // Stop the browser from submitting the form so we can do so with JavaScript
    event.preventDefault();

    const response = await fetch('/blogpost', {
        method: 'POST',
        body: JSON.stringify({ comment }),
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