"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connectionBiblioteca_1 = __importDefault(require("../database/connectionBiblioteca"));
class Usuarios extends sequelize_1.Model {
}
Usuarios.init({
    id: {
        autoIncrement: true,
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false,
        primaryKey: true
    },
    nombre_completo: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    telefono: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false
    },
    correo: {
        type: sequelize_1.DataTypes.STRING,
        defaultValue: true
    },
    psw: {
        type: sequelize_1.DataTypes.STRING,
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
    tableName: 'usuarios',
    timestamps: true,
});
exports.default = Usuarios;
