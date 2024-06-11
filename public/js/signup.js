const signUpForm = async (event) => {
  event.preventDefault();
      
  const formData = new FormData(e.target);
  for (let pair of formData.entries()) {
      console.log(pair[0] + ': ' + pair[1]);
  }

  // const response = await fetch('/api/user', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify(newUser)
  // });

  // if (response.ok) {
  //   document.location.replace('/');
  // } else {
  //   alert('Failed to log in');
  // }
    
};
  
document
  .querySelector('.login-flex')
  .addEventListener('submit', signUpForm);