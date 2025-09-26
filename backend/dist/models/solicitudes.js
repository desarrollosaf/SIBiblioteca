"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connectionBiblioteca_1 = __importDefault(require("../database/connectionBiblioteca"));
class Solicitudes extends sequelize_1.Model {
}
Solicitudes.init({
    id: {
        autoIncrement: true,
        type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
        primaryKey: true
    },
    id_usuario: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    id_registro: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    fecha_solicitud: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true,
        defaultValue: sequelize_1.DataTypes.NOW
    },
    status_solicitud: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1
    },
    fecha_aprobacion: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true
    },
    rfc_us_aprobacion: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    fecha_inicio_visual: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true
    },
    fecha_fin_visual: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true
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
    tableName: 'solicitudes',
    timestamps: true,
});
exports.default = Solicitudes;
