const User = require('./User');
const Bodyparts = require('./Bodyparts');
const Workouts = require('./Workouts');


Workouts.belongsTo(Bodyparts, {
    
    through: {
        foreignKey: 'bodyparts_id',
    },
  });

Bodyparts.hasMany(Workouts,{
    through: {
        foreignKey: 'bodyparts_id',
    },
});
  
module.exports = { User, Bodyparts, Workouts};