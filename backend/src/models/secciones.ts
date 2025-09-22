import{
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  ForeignKey,
} from 'sequelize';

import sequelize from '../database/connectionBiblioteca';

class Secciones extends Model<
  InferAttributes<Secciones>,
  InferCreationAttributes<Secciones>
> {
    declare id: CreationOptional<number>;
    declare seccion: string; 
    declare status: boolean;
    declare createdAt?: Date;
    declare updatedAt?: Date;
}

Secciones.init(
    {
        id:{
            autoIncrement: true,
            type: DataTypes.BIGINT.UNSIGNED,
            allowNull: false,
            primaryKey: true
        }, 
        seccion:{
            type: DataTypes.STRING(255),
            allowNull: false
        },
        status:{
            type: DataTypes.BOOLEAN,
            defaultValue: true,
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
        tableName: 'secciones',
        timestamps: true,
    }
);

export default Secciones;