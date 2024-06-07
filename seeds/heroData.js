const { Heroes } = require('../models');

const heroData = [
    {
        id: 1,
        heroName: 'Super Man',
        firstName: 'Clark',
        lastName: 'Kent',
        description: 'Super Man comes from the planet Krypton and is widely regarded as one of our strongest heroes.',
        powers: 'Flight, Strength, Laser Vision, X Ray',
        powerLevel: 'S',
        locationBase: 'Metropolis',
        travelSpeed: 'Plane',
        registeredBy: '',
        requestId: '',
    }
]

const seedHeroes = () => Heroes.bulkCreate(heroData);

module.exports = seedHeroes;
