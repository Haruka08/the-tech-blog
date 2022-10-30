// hides comment forms
const commentBoxes = document.getElementsByClassName('comment');

for (const commentBox of commentBoxes) {
  commentBox.style.display = 'none';
}

// hides blog ids
const blogIds = document.getElementsByClassName('blog-id');

for (const blogId of blogIds) {
  blogId.style.display = 'none';
}

//sends request to controllers 
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
  
const openComment = async (event) => {
  event.preventDefault();
  
  const blogId = document.querySelector('.blog-id').value
  const commentBox = document.querySelector(`#blogId${blogId}`);

  console.log(blogId)
  console.log(commentBox)

  commentBox.style.display = 'block';
}

openComment()

const newComment = async (event) => {
  // Stop the browser from submitting the form so we can do so with JavaScript
  event.preventDefault();

  const commentId = document.querySelector('.blog-id').value
  const comment = document.querySelector(`#comment${commentId}`).value

  const response = await fetch('/api/blog/comment', {
      method: 'POST',
      body: JSON.stringify({ comment }),
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
  .querySelector('.open-comment')
  .addEventListener('click', openComment);

  document
  .querySelector('.comment-form')
  .addEventListener('submit', newComment);