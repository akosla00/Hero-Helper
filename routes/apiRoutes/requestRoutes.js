const requestController = require('../../controllers/requestController');
// const { withAuth } = require('../../utils/Auth');

const router = require('express').Router();

router.route('/').post(requestController.add);


module.exports = router
