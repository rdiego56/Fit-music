const router = require('express').Router();
const userRoutes = require('./userRoutes');
const workoutRoutes = require('./workoutRoutes');
const bodypartsRoutes = require ('./bodypartsRoute');

router.use('./users', userRoutes);
router.use('./bodyparts', bodypartsRoutes);
router.use('./workout', workoutRoutes);

module.exports = router;