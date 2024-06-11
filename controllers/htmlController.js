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
};