'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Teams', [{
                name: 'Alabama',
                division: 'West',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Arkansas',
                division: 'West',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Auburn',
                division: 'West',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Florida',
                division: 'East',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Georgia',
                division: 'East',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Kentucky',
                division: 'East',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Louisiana State',
                division: 'West',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Mississippi',
                division: 'West',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Mississippi State',
                division: 'West',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Missouri',
                division: 'East',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'South Carolina',
                division: 'East',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Tennessee',
                division: 'East',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Texas A&M',
                division: 'West',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Vanderbilt',
                division: 'East',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ]);
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Teams', null, {});
    }
};