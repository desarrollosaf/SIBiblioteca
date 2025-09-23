import{
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  ForeignKey,
} from 'sequelize';

import sequelize from '../database/connectionBiblioteca';
import Series from './series';

class Subseries extends Model<
  InferAttributes<Subseries>,
  InferCreationAttributes<Subseries>
> {
    declare id: CreationOptional<number>;
    declare idSerie: number; 
    declare subserie: string; 
    declare status: boolean;
    declare createdAt?: Date;
    declare updatedAt?: Date;

}

Subseries.init(
    {
        id:{
            autoIncrement: true,
            type: DataTypes.BIGINT.UNSIGNED,
            allowNull: false,
            primaryKey: true
        },
        idSerie:{
            type: DataTypes.NUMBER,
            allowNull: false
        },
        subserie:{
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
        tableName: 'subseries',
        timestamps: true,
    }
);

Subseries.belongsTo(Series, {
    foreignKey: "idSerie", as: "m_serie"
}) 

export default Subseries;