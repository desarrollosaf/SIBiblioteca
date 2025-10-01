"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelizeBiblio = new sequelize_1.Sequelize('bibliotecaV2', 'homestead', 'secret', {
    host: '192.168.10.10',
    dialect: 'mysql',
    define: {
        freezeTableName: true
    }
});
exports.default = sequelizeBiblio;
