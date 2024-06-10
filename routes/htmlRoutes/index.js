const router = require('express').Router();
const htmlContoller = require('../../controllers/htmlController');

router.route('/login').get(htmlContoller.login);
router.route('/').get(htmlContoller.homeroute);

module.exports = router;
