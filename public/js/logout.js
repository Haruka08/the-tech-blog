const logout = async (event) => {
    // Stop the browser from submitting the form so we can do so with JavaScript
    event.preventDefault();
  
    const response = await fetch ('/api/user/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });

      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
  };
  
  document
    .getElementById('logout')
    .addEventListener('click', logout);
