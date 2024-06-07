const sequelize = require('../config/index');
const seedHeroes = require('./heroData');
const seedPowers = require('./powerData');
const seedRequests = require('./requestData');
const seedReviews = require('./reviewData');
const seedUsers = require('./userData');

const seedAll = async () => {
    await sequelize.sync({ force: true });

    await seedUsers();
    await seedHeroes();
    await seedPowers();
    await seedRequests();
    await seedReviews();

    process.exit(0);
}

seedAll();
