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
  
  const updateBlog = async (event) => {
    // Stop the browser from submitting the form so we can do so with JavaScript
    event.preventDefault();

    const id = event.target.getAttribute('id')
    const title = document.querySelector('#update-title').value
    const content = document.querySelector('#update-content').value

console.log(id)
console.log(title)
console.log(content)

    const response = await fetch('/api/blog/:id', {
        method: 'PUT',
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

  const deleteBlog = async (event) => {
    // Stop the browser from submitting the form so we can do so with JavaScript
    event.preventDefault();

    const response = await fetch('/api/blog/:id', {
        method: 'DELETE',
      });

    if(response.ok){
      document.location.replace('/dashboard');
      console.log("Success")
    } else {
        alert("New blog post submission failed")
    }
  };

  document
    .querySelector('#new-blog')
    .addEventListener('submit', postBlog);

  document
    .querySelector('#update')
    .addEventListener('submit', updateBlog);
    
  document
    .querySelector('#delete')
    .addEventListener('click', deleteBlog);