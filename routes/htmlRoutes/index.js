const router = require('express').Router();
const htmlContoller = require('../../controllers/htmlController');//This connects to the controller folder to the htmlController.js file

// router.route('/login').get(htmlContoller.signup);
router.route('/').get(htmlContoller.home);//landing page that will display your homepage

module.exports = router;
