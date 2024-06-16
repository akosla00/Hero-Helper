const heroRegistrationForm = async (event) => {
    event.preventDefault();

    const heroName = document.querySelector('#inputHeroName').value.trim();
    const imgUrl = document.querySelector('#inputImage').value.trim();
    let firstName = document.querySelector('#inputFirstName').value.trim();
    if (firstName === '') {
        firstName = null;
    }
    let lastName = document.querySelector('#inputLastName').value.trim();
    if (lastName === '') {
        lastName = null;
    }
    const description = document.querySelector('#inputDescription').value.trim();
    const powerLevel = document.querySelector('#inputPowerLevel').value.trim();
    const location = document.querySelector('#inputLocation').value.trim();
    
    const newHero = {
        heroName: heroName,
        img: imgUrl,
        firstName: firstName,
        lastName: lastName,
        description: description,
        powerLevel: powerLevel,
        locationBase: location,
    }

    console.log(newHero);
    console.log(location)

    const response = await fetch('/api/hero', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newHero)
    });

    if (response.ok) {
        console.log('You added a new hero!');
        document.location.replace('/heroes');
    } else {
        console.log('There was an error!');
    }
}

document
    .querySelector('#heroCreationForm')
    .addEventListener('submit', heroRegistrationForm);