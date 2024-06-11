const signUpForm = async (event) => {
  event.preventDefault();
  
  const userName = document.querySelector('#inputUserName').value.trim();
  const firstName = document.querySelector('#inputFirstName').value.trim();
  const lastName = document.querySelector('#inputLastName').value.trim();
  const email = document.querySelector('#inputEmail').value.trim();
  const password = document.querySelector('#inputPassword').value.trim();

  const newUser = {
    username: userName,
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password
  }

  console.log(newUser);

  const response = await fetch('/api/user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newUser)
  });

  if (response.ok) {
    console.log('You added a new user! TESTING')
    document.location.replace('/');
  } else {
    alert('Failed to log in');
  }
    
};
  
document
  .querySelector('#signUpForm')
  .addEventListener('submit', signUpForm);