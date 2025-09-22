"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connectionBiblioteca_1 = __importDefault(require("../database/connectionBiblioteca"));
class Secciones extends sequelize_1.Model {
}
Secciones.init({
    id: {
        autoIncrement: true,
        type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
        primaryKey: true
    },
    seccion: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: false
    }
}, {
    sequelize: connectionBiblioteca_1.default,
    tableName: 'secciones',
    timestamps: true,
});
exports.default = Secciones;
