const requestController = require('../../controllers/requestController');
const { withAuth } = require('../../utils/Auth');

const router = require('express').Router();

router.route('/').post(withAuth, requestController.add).get(requestController.all);


module.exports = router
