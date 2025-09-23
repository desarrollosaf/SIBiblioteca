import{
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  ForeignKey,
} from 'sequelize';

import sequelize from '../database/connectionBiblioteca';

class Registros extends Model<
  InferAttributes<Registros>,
  InferCreationAttributes<Registros>
> {
    declare id: CreationOptional<number>;
    declare id_seccion: number;
    declare id_serie: number;
    declare id_subserie: number;
    declare clave: number;
    declare ubicacion: string ;
    declare anio: number;
    declare tomo: number;
    declare num_exp: number;
    declare fecha_inicial: Date;
    declare fecha_final: Date;
    declare institucion: string ;
    declare nombre_exp: string ;
    declare fojas: number ;
    declare observaciones: string;
    declare estado_doc: string | null;
    declare caracteristicas_externas_doc: string ;
    declare path_portada: string;
    declare path_doc: string ;
    declare tipo_acceso: number;
    declare status: boolean;
    declare createdAt?: Date;
    declare updatedAt?: Date;
}
    Registros.init(
        {
            id:{
                autoIncrement: true,
                type: DataTypes.BIGINT.UNSIGNED,
                allowNull: false,
                primaryKey: true
            }, 
            id_seccion:{
                type: DataTypes.NUMBER,
                allowNull: false
            },
            id_serie:{
                type: DataTypes.NUMBER,
                allowNull: false
            },
            id_subserie:{
                type: DataTypes.NUMBER,
                allowNull: false
            },
            clave:{
                type: DataTypes.NUMBER,
                allowNull: false
            },
            ubicacion:{
                type: DataTypes.STRING,
                allowNull: false
            },
            anio:{
                type: DataTypes.NUMBER,
                allowNull: false
            },
            tomo:{
                type: DataTypes.NUMBER,
                allowNull: false
            },
            num_exp:{
                type: DataTypes.NUMBER,
                allowNull: false
            },
            fecha_inicial:{
                type: DataTypes.DATE,
                allowNull: false
            },
            fecha_final:{
                type: DataTypes.DATE,
                allowNull: false
            },
            institucion:{
                type: DataTypes.STRING,
                allowNull: false
            },
            nombre_exp:{
                type: DataTypes.STRING,
                allowNull: false
            },
            fojas:{
                type: DataTypes.NUMBER,
                allowNull: false
            },
            observaciones:{
                type: DataTypes.STRING,
                allowNull: false
            },
            estado_doc:{
                type: DataTypes.STRING,
                allowNull: false
            },
            caracteristicas_externas_doc:{
                type: DataTypes.STRING,
                allowNull: false
            },
            path_portada:{
                type: DataTypes.STRING,
                allowNull: false
            },
            path_doc:{
                type: DataTypes.STRING,
                allowNull: false
            },
            tipo_acceso:{
                type: DataTypes.NUMBER,
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
            tableName: 'registros',
            timestamps: true,
        }
    );
            
export default Registros;