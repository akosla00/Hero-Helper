const Users = require('./Users');
const Heroes = require('./Heroes');
const Powers = require('./Powers');
const Requests = require('./Requests');
const Reviews = require('./Reviews');

Users.hasMany(Requests, {
    foreignKey: 'user_id',
});

Requests.belongsTo(Users, {
    foreignKey: 'user_id',
});

Users.hasMany(Heroes, {
    foreignKey: 'registered_by',
});

Heroes.belongsTo(Users, {
    foreignKey: 'registered_by',
});

Requests.hasOne(Heroes, {
    foreignKey: 'request_id',
});

Heroes.belongsTo(Requests, {
    foreignKey: 'request_id',
});

Requests.hasOne(Reviews, {
    foreignKey: 'job_request_id',
});

Reviews.belongsTo(Requests, {
    foreignKey: 'job_request_id',
});

Heroes.hasMany(Reviews, {
    foreignKey: 'hero_requested_id',
});

Reviews.belongsTo(Heroes, {
    foreignKey: 'hero_requested_id',
});

// Powers.hasMany(Heroes, {
//     foreignKey: 'powers_id',
// });

// Heroes.belongsToMany(Powers, {
//     foreignKey: 'powers_id',
// });

module.exports = { Users, Heroes, Powers, Requests, Reviews };