// calling the database to get info to display usind hadle bars
const { request } = require('express');
const { Requests, Users, Heroes } = require('../Models')

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
    about: (req, res) => {
        res.render('about');
    },
    heroes: async (req, res) => {
        const heroes = await Heroes.findAll().catch((err) => res.json(err));
        heroes.sort((a, b) => {
            const nameA = a.heroName.toUpperCase(); // ignore upper and lowercase
            const nameB = b.heroName.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }

            // names must be equal
            return 0;
          });
        const mapHeroes = heroes.map((hero) => hero.get({ plain: true }));
        res.render('heroes', { mapHeroes });
    },
	map: (req, res) => {
		res.render('map');
	},
	requests: (req, res) => {
		res.render('requests');
	},
	profile: async (req, res) => {
        const userData = await Users.findByPk(req.session.user_id);
        const cleanUserData = userData.get({ plain: true });
        const userRequest = await Requests.findAll({ where: { userId: cleanUserData.id } });
        // console.log(userRequest);
        const requests = userRequest.map((post) => post.get({ plain: true }));
        // console.log(requests)
        // console.log(req.session.logged_in);
        // res.render('profile', { requests, logged_in: req.session.logged_in});
        res.render('profile', {cleanUserData , requests}); 
	},
    oneHero: async (req, res) => {
        try {
            const heroData = await Heroes.findByPk(req.params.id);
            if (!heroData) {
                res.status(404).json({ message: 'No hero with this id!'});
                return;
            }

            const hero = heroData.get({ plain: true });
            res.render('oneHero', hero);
        } catch (error) {
            res.status(500).json(error);
        }
    }
};
