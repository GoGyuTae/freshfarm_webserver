'use strict';
module.exports = function(sequelize, DataTypes){
    let freshsettable = sequelize.define("freshsettable", {
        illuminatation:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
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
        tableName: "freshsettable"
    });
    return freshsettable;
}