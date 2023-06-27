const userData = require("./userData.json");
const bodypartsData = require("./bodypartsData.json");
const workoutData = require("./workoutsData.json");
const sequelize = require('../config/connection');


const { User, Bodyparts, Workouts } = require('../models');
const seedDatabase = async () => {
    await sequelize.sync({ force: true });
  
    const users = await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });

    const bodyparts = await Bodyparts.bulkCreate(bodypartsData);

    const workouts = await Workouts.bulkCreate(workoutData);

}


seedDatabase();

