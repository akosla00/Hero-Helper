const { Requests } = require('../models');

const requestData = [
    {
        title: 'HELP I AM BEING ROBBED',
        description: 'I am being robbed and need someone to help me!',
        powerLevel: 'S',
        userId: 1
    }
]

const seedRequests = () => Requests.bulkCreate(requestData);

module.exports = seedRequests;
