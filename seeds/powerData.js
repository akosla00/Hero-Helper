const { Powers } = require('../models');

const powerData = [
    {
        id: 1,
        powerName: 'Flight',
    },
    {
        id: 2,
        powerName: 'Strength',
    },
    {
        id: 3,
        powerName: 'X-ray vision',
    },
    {
        id: 4,
        powerName: 'Teleportation',
    },
    {
        id: 5,
        powerName: 'Shapeshifting',
    },
    {
        id: 6,
        powerName: 'Invisibility',
    },
    {
        id: 7,
        powerName: 'Speed',
    },
]

const seedPowers = () => Powers.bulkCreate(powerData);

module.exports = seedPowers;
