const router = require('express').Router();
const htmlController = require('../../controllers/htmlController');//This connects to the controller folder to the htmlController.js file
const { withAuth } = require('../../utils/Auth');

router.route('/').get(htmlController.home);//landing page that will display your homepage
router.route('/about').get(htmlController.about);
router.route('/login').get(htmlController.login);
router.route('/logout').get(htmlController.logout);
router.route('/sign-up').get(htmlController.signUp);
router.route('/requests').get(htmlController.requests);
router.route('/heroes').get(withAuth, htmlController.heroes);
router.route('/map').get(htmlController.map);
router.route('/profile').get(withAuth, htmlController.profile);
router.route('/:id').get(withAuth, htmlController.oneHero);

module.exports = router;
