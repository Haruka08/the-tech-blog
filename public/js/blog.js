const postBlog = async (event) => {
    // Stop the browser from submitting the form so we can do so with JavaScript
    event.preventDefault();

    const title = document.querySelector('#title').value
    const content = document.querySelector('#content').value

    const response = await fetch('/api/blog/new', {
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
    .getElementById('new-blog')
    .addEventListener('submit', postBlog);

