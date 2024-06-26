const heroController = require('../../controllers/heroController');
const { withAuth } = require('../../utils/Auth');

const router = require('express').Router();

router.route('/').post(withAuth, heroController.add).get(heroController.all);

module.exports = router;
