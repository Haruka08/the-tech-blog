const userPost = async (event) => {
    event.preventDefault();

    const response = await fetch('/dashboard/user', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });
      if(response.ok){
        document.location.replace('/dashboard/user');
      } else {
          alert("User post coudl not be retrieved")
      }
  };
  
const newPost = async (event) => {
  // Stop the browser from submitting the form so we can do so with JavaScript
  event.preventDefault();

  const response = await fetch('/dashboard/new', {
      method: 'POST',
      body: JSON.stringify({ title, content}),
      headers: { 'Content-Type': 'application/json' },
    });

  if(response.ok){
    document.location.replace('/dashboard');
  } else {
      alert("New blog post submission failed")
  }
};

  document
  .querySelector('.dashboard')
  .addEventListener('click', userPost);

  document
  .querySelector('#new-post')
  .addEventListener('click', newPost);