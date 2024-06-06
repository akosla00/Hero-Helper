const router = require('express').Router();

const userRoutes = require('./userRoutes');
const heroRoutes = require('./heroRoutes');

router.use('/user', userRoutes);
router.use('/hero', heroRoutes);

module.exports = router;
