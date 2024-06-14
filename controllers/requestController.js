const { Requests, Users } = require('../Models');

module.exports = {
    add: async (req, res) => {
        const userData = await Users.findByPk(req.session.user_id);
        const tempData = {
            title: req.body.title,
            description: req.body.description,
            powerLevel: req.body.powerLevel,
            location: req.body.location,
            userId: userData.id
        };
        try {
            const requestData = await Requests.create(tempData);
            res.json(requestData);
        } catch (error) {
            res.json(error);
        }

    },
     all: async (req, res) => {
        const userData = await Requests.findAll();
        res.json(userData);
    }
}
