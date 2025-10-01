import{
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  ForeignKey,
} from 'sequelize';

import sequelize from '../database/connectionBiblioteca';

class Role extends Model<
  InferAttributes<Role>,
  InferCreationAttributes<Role>
> {
    declare id: CreationOptional<number>;
    declare name: string; 
    declare desc: string; 
    declare createdAt?: Date;
    declare updatedAt?: Date;
}

Role.init(
    {
        id:{
           autoIncrement: true,
            type: DataTypes.BIGINT.UNSIGNED,
            allowNull: false,
            primaryKey: true
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        desc:{
            type: DataTypes.STRING,
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
        tableName: 'roles',
        timestamps: true,
    }
);


export default Role;