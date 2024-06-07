const sequelize = require('../config/index');
const seedHeroes = require('./heroData');
const seedPowers = require('./powerData');
const seedRequests = require('./requestData');
const seedReviews = require('./reviewData');

const seedAll = async () => {
    await sequelize.sync({ force: true });

    await seedHeroes();
    await seedPowers();
    await seedRequests();
    await seedReviews();

    process.exit(0);
}

seedAll();
