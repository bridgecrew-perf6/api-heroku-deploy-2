const Location = require('./location');
const Traveller = require('./traveller');
const Trip = require('./trip');

// relationships & assocations

Location.belongsToMany(Traveller, {
  through: {
    model: Trip, 
    unique: false
  }, 
  // as: 'trip_location'
});

Traveller.belongsToMany(Location, {
  through: {
    model: Trip,
    unique: false
  },
  // as: 'location_traveller'
});

Trip.belongsTo(Location, {
  foreignKey: 'location_id'
});

Trip.belongsTo(Traveller, {
  foreignKey: 'traveller_id'
});


module.exports = { Location, Traveller, Trip };