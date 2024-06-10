const { Heroes } = require('../Models');

module.exports = {
    add: async (req, res) => {
        const heroData = await Heroes.create(req.body);
        res.json(heroData);
    },
    all: async (req, res) => {
        const heroData = await Heroes.findAll();
        res.json(heroData);
    }
};