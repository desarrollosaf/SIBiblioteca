"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelizeBiblio = new sequelize_1.Sequelize('adminplem_sibiblioteca', 'usr_sibiblioteca', 'NkDSkgvIVrLxhPzvf5Hq', {
    host: '192.168.36.53',
    dialect: 'mysql',
    define: {
        freezeTableName: true
    }
});
exports.default = sequelizeBiblio;
