const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const email = document.querySelector('#inputEmail').value.trim();
    const password = document.querySelector('#inputPasword').value.trim();
  
    if (email && password) {

      const response = await fetch('/api/user/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
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
    .querySelector('#login-flex')
    .addEventListener('submit', loginFormHandler);
