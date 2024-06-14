const requestForm = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#title').value.trim();
    const description = document.querySelector('#description').value.trim();
    const powerLevel = document.querySelector('#powerLevel').value.trim();
    const location = document.querySelector('#location').value.trim();

    const newRequest = {
        title: title,
        description: description,
        powerLevel: powerLevel,
        location: location
    };

    console.log(newRequest);

    const response = await fetch('/api/requests', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newRequest)
    });

    if (response.ok) {
        console.log('Created a new request! TEST');
        document.location.replace('/');
    } else {
        alert('Request failed');
    }
};

document
    .querySelector('#submit')
    .addEventListener('click', requestForm);
