"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connectionBiblioteca_1 = __importDefault(require("../database/connectionBiblioteca"));
class Subseries extends sequelize_1.Model {
}
Subseries.init({
    id: {
        autoIncrement: true,
        type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
        primaryKey: true
    },
    idSerie: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false
    },
    subserie: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
}, {
    sequelize: connectionBiblioteca_1.default,
    tableName: 'subseries',
    timestamps: true,
});
exports.default = Subseries;
