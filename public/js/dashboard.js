

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

  document
  .getElementById('dashboard')
  .addEventListener('click', userPost);
