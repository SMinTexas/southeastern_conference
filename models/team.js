'use strict';
module.exports = (sequelize, DataTypes) => {
    const Team = sequelize.define('Team', {
        name: DataTypes.STRING,
        division: DataTypes.STRING,
        nickname: DataTypes.STRING,
        mascot: DataTypes.STRING,
        location: DataTypes.STRING,
        stadium: DataTypes.STRING,
        capacity: DataTypes.STRING,
        dTitles: DataTypes.STRING,
        cTitles: DataTypes.STRING,
        nTitles: DataTypes.STRING,
        teamLogo: DataTypes.STRING
    }, {});
    Team.associate = function(models) {
        // associations can be defined here
    };
    return Team;
};