module.exports = {
	home: (req, res) => {
		res.render('home', {logged_in: req.session.logged_in});
	},
    login: (req, res) => {
        res.render('login');
    },
    logout: (req, res) => {
        res.render('logout');
    },
    signUp: (req, res) => {
        res.render('signUp');
    },
	map: (req, res) => {
		res.render('map');
	},
};