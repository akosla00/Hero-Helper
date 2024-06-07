module.exports = {
	homeroute: (req, res) => {
		res.render('home');
	},
	addComment: (req, res) => {
		//do work as a post create a new comment
		res.render('commentAdded');
	},
    login: (req, res) => {
        res.render('login');
    }
};