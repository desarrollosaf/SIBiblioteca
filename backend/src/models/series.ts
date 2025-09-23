import{
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  ForeignKey,
} from 'sequelize';

import sequelize from '../database/connectionBiblioteca';
import Secciones from './secciones';

class Series extends Model<
  InferAttributes<Series>,
  InferCreationAttributes<Series>
> {
    declare id: CreationOptional<number>;
    declare idSeccion: number; 
    declare serie: string; 
    declare status: boolean;
    declare createdAt?: Date;
    declare updatedAt?: Date;
}

Series.init(
    {
        id:{
           autoIncrement: true,
            type: DataTypes.BIGINT.UNSIGNED,
            allowNull: false,
            primaryKey: true
        },
        idSeccion:{
            type: DataTypes.NUMBER,
            allowNull: false
        },
        serie:{
            type: DataTypes.STRING,
            allowNull: false
        },
        status:{
            type: DataTypes.BOOLEAN,
            defaultValue: true
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
        tableName: 'series',
        timestamps: true,
    }
);

Series.belongsTo(Secciones, {
    foreignKey: "idSeccion", as: "m_seccion"
}) 

export default Series;