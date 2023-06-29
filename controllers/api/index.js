const router = require('express').Router();
const userRoutes = require('./userRoutes');
const workoutRoutes = require('./workoutRoutes');
const bodypartsRoutes = require ('./bodypartsRoute');

router.use('./users', userRoutes);


module.exports = router;