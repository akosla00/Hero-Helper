const { Requests } = require('../Models');

module.exports = {
    add: async (req, res) => {
        const tempData = {
            title: req.body.title,
            description: req.body.description,
            powerLevel: req.body.powerLevel,
            location: req.body.location,
            userId: req.session.userId
        };
        try {
            const requestData = await Requests.create(tempData);
            res.json(requestData);
        } catch (error) {
            res.json(error);
        }

    }
}
