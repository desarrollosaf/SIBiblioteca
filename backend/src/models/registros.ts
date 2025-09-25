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
import Series from './series';
import Subseries from './subseries';
import TipoAcceso from './tipo_accesos';

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
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            }, 
            id_seccion:{
                type: DataTypes.INTEGER,
                allowNull: false
            },
            id_serie:{
                type: DataTypes.INTEGER,
                allowNull: false
            },
            id_subserie:{
                type: DataTypes.INTEGER,
                allowNull: false
            },
            clave:{
                type: DataTypes.INTEGER,
                allowNull: false
            },
            ubicacion:{
                type: DataTypes.STRING,
                allowNull: false
            },
            anio:{
                type: DataTypes.INTEGER,
                allowNull: false
            },
            tomo:{
                type: DataTypes.INTEGER,
                allowNull: false
            },
            num_exp:{
                type: DataTypes.INTEGER,
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
                type: DataTypes.INTEGER,
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
                type: DataTypes.INTEGER,
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
            

    Registros.belongsTo(Secciones, {
        foreignKey: "id_seccion", as: "m_seccion"
    }) 

    Registros.belongsTo(Series, {
        foreignKey: "id_serie", as: "m_serie"
    }) 

    Registros.belongsTo(Subseries, {
        foreignKey: "id_subserie", as: "m_subserie"
    }) 

    Registros.belongsTo(TipoAcceso, {
        foreignKey: "tipo_acceso", as: "m_acceso"
    }) 

export default Registros;