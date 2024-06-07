const { Users } = require('../Models');

module.exports = {
    add: async (req, res) => {
		const userData = await User.create(req.body);
		req.session.save(() => {
			req.session.user_id = userData.id;
			req.session.logged_in = true;

			res.json({ user: userData, message: 'You are now logged in!' });
		});
	},
    all: async (req, res) => {
        const userData = await Users.findAll();
        res.json(userData);
    }
};