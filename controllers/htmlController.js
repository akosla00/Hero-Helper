// calling the database to get info to display usind hadle bars
const { request } = require('express');
const { Requests, Users } = require('../Models')

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
	requests: (req, res) => {
		res.render('requests');
	},
	profile: async (req, res) => {
        const userData = await Users.findByPk(req.session.user_id);
        console.log(userData);
        // const userRequest = await Requests.findOne({ where: { userId: userData.id } });
        // console.log(userRequest);
        // const requests = userRequest.map((post) => post.get({ plain: true }));
        // console.log(requests)
        // console.log(req.session.logged_in);
        // res.render('profile', { requests, logged_in: req.session.logged_in});
        res.render('profile'); 
	},
};