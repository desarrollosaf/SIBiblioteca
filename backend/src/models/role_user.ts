import{
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  ForeignKey,
} from 'sequelize';

import sequelize from '../database/connectionBiblioteca';
import Role from './roles';

class RoleUsers extends Model<
  InferAttributes<RoleUsers>,
  InferCreationAttributes<RoleUsers>
> {
    declare id: CreationOptional<number>;
    declare role_id: number; 
    declare user_id: number; 
    declare createdAt?: Date;
    declare updatedAt?: Date;
}

RoleUsers.init(
    {
        id:{
           autoIncrement: true,
            type: DataTypes.BIGINT.UNSIGNED,
            allowNull: false,
            primaryKey: true
        },
        role_id:{
            type: DataTypes.NUMBER,
            allowNull: false
        },
        user_id:{
            type: DataTypes.NUMBER,
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: DataTypes.NOW
        },
    },
    {
        sequelize,
        tableName: 'role_users',
        timestamps: true,
    }
);

RoleUsers.belongsTo(Role, {
    foreignKey: "role_id", as: "role"
}) 

export default RoleUsers;