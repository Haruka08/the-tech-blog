const postBlog = async (event) => {
    // Stop the browser from submitting the form so we can do so with JavaScript
    event.preventDefault();

    const response = await fetch('/blogpost', {
        method: 'POST',
        body: JSON.stringify({ title, content, user_name }),
        headers: { 'Content-Type': 'application/json' },
      });

    if(response.ok){
        alert("Successfully submitted new blog post")
    } else {
        alert("New blog post submission failed")
    }
  };
  
  document
    .querySelector('.blog-post')
    .addEventListener('submit', postBlog);