const postBlog = async (event) => {
    // Stop the browser from submitting the form so we can do so with JavaScript
    event.preventDefault();

    const response = await fetch('/dashboard/blog/new', {
        method: 'POST',
        body: JSON.stringify({ title, content}),
        headers: { 'Content-Type': 'application/json' },
      });

    if(response.ok){
      document.location.replace('/dashboard');
      console.log("Success")
    } else {
        alert("New blog post submission failed")
    }
  };
  
  document
    .querySelector('.blog-form')
    .addEventListener('submit', postBlog);