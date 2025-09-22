import{
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  ForeignKey,
} from 'sequelize';

import sequelize from '../database/connectionBiblioteca';

class Subseries extends Model<
  InferAttributes<Subseries>,
  InferCreationAttributes<Subseries>
> {
    declare id: number;
    declare idSerie: number; 
    declare subserie: string; 
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
    },
    {
        sequelize,
        tableName: 'subseries',
        timestamps: true,
    }
);

export default Subseries;