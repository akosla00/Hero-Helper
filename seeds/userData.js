const { Users } = require('../models');

const userData = [
    {
        username: 'IGotRobbed69',
        firstName: 'Alec',
        lastName: 'Kosla',
        location: 'Metropolis',
        password: 'KoalaBears69',
    }
]

const seedUsers = () => Users.bulkCreate(userData);

module.exports = seedUsers;
