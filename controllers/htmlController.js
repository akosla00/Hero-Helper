module.exports = {
	home: (req, res) => {
		res.render('home');
	},
<<<<<<< Updated upstream
	login: (req, res) => {
		//do work as a post create a new comment
		res.render('login');
	}
=======
    login: (req, res) => {
        res.render('login');
    },
    signUp: (req, res) => {
        res.render('signUp');
    },
	map: (req, res) => {
		res.render('map');
	},
>>>>>>> Stashed changes
};