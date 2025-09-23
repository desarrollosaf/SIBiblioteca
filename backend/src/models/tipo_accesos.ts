import{
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  ForeignKey,
} from 'sequelize';

import sequelize from '../database/connectionBiblioteca';

class TipoAcceso extends Model<
  InferAttributes<TipoAcceso>,
  InferCreationAttributes<TipoAcceso>
> {
    declare id: CreationOptional<number>;
    declare tipo: string; 
    declare createdAt?: Date;
    declare updatedAt?: Date;
}

TipoAcceso.init(
    {
        id:{
            autoIncrement: true,
            type: DataTypes.BIGINT.UNSIGNED,
            allowNull: false,
            primaryKey: true
        },
        tipo:{
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
        tableName: 'tipos_accesos',
        timestamps: true,
    }
);


export default TipoAcceso;