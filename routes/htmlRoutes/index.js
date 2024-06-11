const router = require('express').Router();
const htmlContoller = require('../../controllers/htmlController');//This connects to the controller folder to the htmlController.js file

router.route('/login').get(htmlContoller.login);
router.route('/sign-up').get(htmlContoller.signUp);
<<<<<<< Updated upstream
// router.route('/login').get(htmlContoller.signup);
=======
router.route('/login').get(htmlContoller.login);
router.route('/sign-up').get(htmlContoller.signUp);
router.route('/map').get(htmlContoller.map);
>>>>>>> Stashed changes
router.route('/').get(htmlContoller.home);//landing page that will display your homepage

module.exports = router;
