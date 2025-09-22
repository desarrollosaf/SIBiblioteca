"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelizeBiblio = new sequelize_1.Sequelize('biblioteca', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    define: {
        freezeTableName: true
    }
});
exports.default = sequelizeBiblio;
