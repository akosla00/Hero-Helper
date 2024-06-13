const router = require('express').Router();

const userRoutes = require('./userRoutes');
const heroRoutes = require('./heroRoutes');
const requestRoutes = require('./requestRoutes');

router.use('/user', userRoutes);
router.use('/hero', heroRoutes);
router.use('/requests', requestRoutes);


module.exports = router;
