'use strict';
module.exports = function(sequelize, DataTypes){
    let freshtable = sequelize.define("freshtable", {
        temperature: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
        humidity: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
        g_humidity: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
        machine_num: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
        }, {
        underscored: true,
        freezeTableName: true,
        tableName: "freshtable"
    });
    return freshtable;
}