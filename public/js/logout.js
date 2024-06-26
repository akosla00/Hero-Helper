const logoutHandler = async (event) => {
    event.preventDefault();

    const response = await fetch('/api/user/logout', {
        method: 'GET',
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        response.json(error);
    }
};

document.querySelector('#logout')
.addEventListener('click', logoutHandler);