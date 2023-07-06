const User = require('./User');
const Bodyparts = require('./Bodyparts');
const Workouts = require('./Workouts');


Workouts.belongsTo(Bodyparts, {  
        foreignKey: 'bodyparts_id',  
});

Bodyparts.hasMany(Workouts,{
        foreignKey: 'bodyparts_id',
});
  
module.exports = { User, Bodyparts, Workouts};