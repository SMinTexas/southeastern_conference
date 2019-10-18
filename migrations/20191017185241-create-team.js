'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Teams', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING
            },
            division: {
                type: Sequelize.STRING
            },
            nickname: {
                type: Sequelize.STRING
            },
            mascot: {
                type: Sequelize.STRING
            },
            location: {
                type: Sequelize.STRING
            },
            stadium: {
                type: Sequelize.STRING
            },
            capacity: {
                type: Sequelize.STRING
            },
            dTitles: {
                type: Sequelize.STRING
            },
            cTitles: {
                type: Sequelize.STRING
            },
            nTitles: {
                type: Sequelize.STRING
            },
            teamLogo: {
                type: Sequelize.STRING
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Teams');
    }
};