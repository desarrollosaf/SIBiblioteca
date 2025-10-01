"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connectionBiblioteca_1 = __importDefault(require("../database/connectionBiblioteca"));
const roles_1 = __importDefault(require("./roles"));
class RoleUsers extends sequelize_1.Model {
}
RoleUsers.init({
    id: {
        autoIncrement: true,
        type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
        primaryKey: true
    },
    role_id: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false
    },
    user_id: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false
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
    tableName: 'role_users',
    timestamps: true,
});
RoleUsers.belongsTo(roles_1.default, {
    foreignKey: "role_id", as: "role"
});
exports.default = RoleUsers;
