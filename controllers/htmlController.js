// calling the database to get info to display usind hadle bars
const { Request } = require('../Models')

module.exports = {
	home: (req, res) => {
		res.render('home');
	},
    login: (req, res) => {
        res.render('login');
    },
    signUp: (req, res) => {
        res.render('signUp');
    },
	map: (req, res) => {
		res.render('map');
	},
	profile: async (req, res) => {
        const userId = 1
        const userRequest = await Request.findOne({ where: { id: userId } });
        
        const requests = userRequest.map((post) => post.get({ plain: true }));
        console.log(req.session.logged_in);
		res.render('profile', { requests, logged_in: req.session.logged_in});
	},
};