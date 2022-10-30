


  const updateBlog = async (event) => {
    // Stop the browser from submitting the form so we can do so with JavaScript
    event.preventDefault();

    console.log("hello")
    const title = document.querySelector('#update-title').value
    const content = document.querySelector('#update-content').value

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
      ];

    const response = await fetch(`/api/blog/${id}`, {
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

    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];

    const response = await fetch(`/api/blog/${id}`, {
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
  .getElementById('update')
  .addEventListener('submit', updateBlog);

document
  .getElementById('delete')
  .addEventListener('click', deleteBlog);