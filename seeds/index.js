const sequelize = require('../config/index');
const heroSeed = require('./heroData');
const powerSeed = require('./powerData');
const requestSeed = require('./requestData');
const reviewSeed = require('./reviewData');

const seedAll = async () => {
    await sequelize.sync({ force: true });

    await heroSeed();
    await powerSeed();
    await requestSeed();
    await reviewSeed();

    process.exit(0);
}

seedAll();
