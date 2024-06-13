const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const email = document.querySelector('#inputEmail').value.trim();
    const password = document.querySelector('#inputPasword').value.trim();
    const emailPassword = {
      email: email,
      password: password
    };

    if (email && password) {

      const response = await fetch('/api/user/login', {
        method: 'POST',
        body: JSON.stringify(emailPassword),
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
    .querySelector('#login')
    .addEventListener('submit', loginFormHandler);
