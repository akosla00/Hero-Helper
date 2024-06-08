const router = require('express').Router();
const htmlContoller = require('../../controllers/htmlController');

router.route('/login').get(htmlContoller.login);
router.route('/sign-up').get(htmlContoller.signUp);
// router.route('/').get(htmlContoller.home);

module.exports = router;
