const requestController = require('../../controllers/requestController');

const router = require('express').Router();

router.route('/').post(requestController.add).get(requestController.all);


module.exports = router
