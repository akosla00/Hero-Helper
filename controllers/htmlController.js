module.exports = {
	home: (req, res) => {
		res.render('home');
	},
	login: (req, res) => {
		//do work as a post create a new comment
		res.render('login');
	}
};