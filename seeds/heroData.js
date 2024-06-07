const { Heroes } = require('../models');

const heroData = [
    {
        heroName: 'Super Man',
        firstName: 'Clark',
        lastName: 'Kent',
        description: 'Super Man comes from the planet Krypton and is widely regarded as one of our strongest heroes.',
        powersId: 2,
        powerLevel: 'S',
        locationBase: 'Metropolis',
        travelSpeed: 'Plane',
        registeredBy: '',
        requestId: '',
    }
]

const seedHeroes = () => Heroes.bulkCreate(heroData);

module.exports = seedHeroes;
