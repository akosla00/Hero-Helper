const { Users } = require('../Models');

module.exports = {
    add: async (req, res) => {
		const userData = await Users.create(req.body);
		req.session.save(() => {
			req.session.user_id = userData.id;
			req.session.logged_in = true;

			res.json({ user: userData, message: 'You are now logged in!' });
		});
	},
	login: async (req, res) => {
		try {
			// Find the user who matches the posted e-mail address
			const userData = await Users.findOne({ where: { email: req.body.email } });

			if (!userData) {
				res.status(400).json({ message: 'Incorrect email or password, please try again' });
				return;
			}

			// Verify the posted password with the password store in the database
			const validPassword = await userData.checkPassword(req.body.password);

			if (!validPassword) {
				res.status(400).json({ message: 'Incorrect email or password, please try again' });
				return;
			}

			// Create session variables based on the logged in user
			req.session.save(() => {
				req.session.user_id = userData.id;
				req.session.logged_in = true;

				res.json({ user: userData, message: 'You are now logged in!' });
			});
		} catch (err) {
			res.status(400).json(err.message);
		}
	},
	logout: (req, res) => {
		if (req.session.logged_in) {
			// Remove the session variables
			req.session.destroy(() => {
				res.status(204).end();
			});
		} else {
			res.status(404).end();
		}
	},
    all: async (req, res) => {
        const userData = await Users.findAll();
        res.json(userData);
    },
	me: async (req, res) => {
		const userData = await User.findByPk(req.session.user_id);
		res.json(userData);
	}
};