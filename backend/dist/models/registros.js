"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connectionBiblioteca_1 = __importDefault(require("../database/connectionBiblioteca"));
const secciones_1 = __importDefault(require("./secciones"));
const series_1 = __importDefault(require("./series"));
const subseries_1 = __importDefault(require("./subseries"));
const tipo_accesos_1 = __importDefault(require("./tipo_accesos"));
class Registros extends sequelize_1.Model {
}
Registros.init({
    id: {
        autoIncrement: true,
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    id_seccion: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true
    },
    id_serie: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true
    },
    id_subserie: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true
    },
    clave: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true
    },
    ubicacion: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    anio: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true
    },
    tomo: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    num_exp: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    fecha_inicial: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true
    },
    fecha_final: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true
    },
    institucion: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    nombre_exp: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    fojas: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true
    },
    observaciones: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    estado_doc: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    caracteristicas_externas_doc: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    estado: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    path_portada: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    path_doc: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    tipo_acceso: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true
    },
    status: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: true
    },
    createdAt: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true,
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
Registros.belongsTo(secciones_1.default, {
    foreignKey: "id_seccion", as: "m_seccion"
});
Registros.belongsTo(series_1.default, {
    foreignKey: "id_serie", as: "m_serie"
});
Registros.belongsTo(subseries_1.default, {
    foreignKey: "id_subserie", as: "m_subserie"
});
Registros.belongsTo(tipo_accesos_1.default, {
    foreignKey: "tipo_acceso", as: "m_acceso"
});
exports.default = Registros;
