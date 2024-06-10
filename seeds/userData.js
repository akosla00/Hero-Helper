const { Users } = require('../Models');

const userData = [
    {
        username: 'IGotRobbed69',
        firstName: 'Alec',
        lastName: 'Kosla',
        password: 'KoalaBears69',
    }
]

const seedUsers = () => Users.bulkCreate(userData);

module.exports = seedUsers;
