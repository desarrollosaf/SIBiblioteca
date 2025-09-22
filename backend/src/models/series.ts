import{
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  ForeignKey,
} from 'sequelize';

import sequelize from '../database/connectionBiblioteca';

class Series extends Model<
  InferAttributes<Series>,
  InferCreationAttributes<Series>
> {
    declare id: number;
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
    },
    {
        sequelize,
        tableName: 'series',
        timestamps: true,
    }
);

export default Series;