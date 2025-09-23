"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connectionBiblioteca_1 = __importDefault(require("../database/connectionBiblioteca"));
class Registros extends sequelize_1.Model {
}
Registros.init({
    id: {
        autoIncrement: true,
        type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
        primaryKey: true
    },
    id_seccion: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false
    },
    id_serie: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false
    },
    id_subserie: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false
    },
    clave: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false
    },
    ubicacion: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    anio: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false
    },
    tomo: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false
    },
    num_exp: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false
    },
    fecha_inicial: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    },
    fecha_final: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    },
    institucion: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    nombre_exp: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    fojas: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false
    },
    observaciones: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    estado_doc: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    caracteristicas_externas_doc: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    path_portada: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    path_doc: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    tipo_acceso: {
        type: sequelize_1.DataTypes.NUMBER,
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
    tableName: 'registros',
    timestamps: true,
});
exports.default = Registros;
