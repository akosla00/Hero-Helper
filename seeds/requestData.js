const { Requests } = require('../Models');

const requestData = [
    {
        title: 'HELP I AM BEING ROBBED',
        description: 'I am being robbed and need someone to help me!',
        powerLevel: 'S',
        location: 'Metropolis',
        userId: 1
    }
]

const seedRequests = () => Requests.bulkCreate(requestData);

module.exports = seedRequests;
