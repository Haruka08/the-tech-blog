const register = async (event) => {
    // Stop the browser from submitting the form so we can do so with JavaScript
    event.preventDefault();
  
    // Gather the data from the form elements on the page
    const user_name = document.querySelector('#register-username').value.trim();
    const password = document.querySelector('#register-password').value.trim();
  
    console.log({ user_name, password });

    if (user_name && password) {
      // Send the e-mail and password to the server
      const response = await fetch('/api/user/register', {
        method: 'POST',
        body: JSON.stringify({ user_name, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/login');
      } else {
        alert('Failed to register');
      }
    }
  };
  
  document
    .getElementById('register')
    .addEventListener('submit', register);