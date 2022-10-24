const register = async (event) => {
    // Stop the browser from submitting the form so we can do so with JavaScript
    event.preventDefault();
  
    // Gather the data from the form elements on the page
    const username = document.querySelector('#register-username').value.trim();
    const password = document.querySelector('#register-password').value.trim();
  
    if (username && password) {
      // Send the e-mail and password to the server
      const response = await fetch('/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to log in');
      }
    }
  };
  
  document
    .querySelector('.registration-form')
    .addEventListener('submit', register);