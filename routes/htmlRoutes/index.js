const router = require('express').Router();
const htmlContoller = require('../../controllers/htmlController');//This connects to the controller folder to the htmlController.js file
const { withAuth } = require('../../utils/Auth');

router.route('/login').get(htmlContoller.login);
router.route('/logout').get(htmlContoller.logout);
router.route('/sign-up').get(htmlContoller.signUp);
router.route('/requests').get(htmlContoller.requests);
router.route('/heroes').get(withAuth, htmlContoller.heroes);
router.route('/map').get(htmlContoller.map);
router.route('/profile').get(withAuth, htmlContoller.profile);
router.route('/:id').get(withAuth, htmlContoller.oneHero);
router.route('/').get(htmlContoller.home);//landing page that will display your homepage

module.exports = router;
