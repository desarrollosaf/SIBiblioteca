import{
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  ForeignKey,
} from 'sequelize';

import sequelize from '../database/connectionBiblioteca';

class Solicitudes extends Model<
  InferAttributes<Solicitudes>,
  InferCreationAttributes<Solicitudes>
> {
    declare id: CreationOptional<number>;
    declare id_usuario: number; 
    declare id_registro: number; 
    declare fecha_solicitud?: Date;
    declare status_solicitud?: number;
    declare fecha_aprobacion?: Date;
    declare rfc_us_aprobacion?: string;
    declare fecha_inicio_visual?: Date;
    declare fecha_fin_visual?: Date;
    declare status?: Boolean;
    declare createdAt?: Date;
    declare updatedAt?: Date;
}

Solicitudes.init(
    {
        id:{
           autoIncrement: true,
            type: DataTypes.BIGINT.UNSIGNED,
            allowNull: false,
            primaryKey: true
        },
        id_usuario:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        id_registro:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        fecha_solicitud:{
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: DataTypes.NOW
        },
        status_solicitud:{
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: 1
        },
        fecha_aprobacion:{
            type: DataTypes.DATE,
            allowNull: true
        },
        rfc_us_aprobacion:{
            type: DataTypes.STRING,
            allowNull: true
        },
        fecha_inicio_visual:{
            type: DataTypes.DATE,
            allowNull: true
        },
        fecha_fin_visual:{
            type: DataTypes.DATE,
            allowNull: true
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
        tableName: 'solicitudes',
        timestamps: true,
    }
);


export default Solicitudes;