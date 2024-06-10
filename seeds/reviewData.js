const { Reviews } = require('../models');

const reviewData = [
    {
        title: 'Great rescue!',
        description: 'Super Man saved all of us! He is the best hero ever!',
        heroRequestedId: 1,
        jobRequestId: 1,
    }
]

const seedReviews = () => Reviews.bulkCreate(reviewData);

module.exports = seedReviews;
