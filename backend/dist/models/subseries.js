"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connectionBiblioteca_1 = __importDefault(require("../database/connectionBiblioteca"));
const series_1 = __importDefault(require("./series"));
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
    status: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: true
    },
    createdAt: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize_1.DataTypes.NOW
    },
    updatedAt: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true,
        defaultValue: sequelize_1.DataTypes.NOW
    },
}, {
    sequelize: connectionBiblioteca_1.default,
    tableName: 'subseries',
    timestamps: true,
});
Subseries.belongsTo(series_1.default, {
    foreignKey: "idSerie", as: "m_serie"
});
exports.default = Subseries;
