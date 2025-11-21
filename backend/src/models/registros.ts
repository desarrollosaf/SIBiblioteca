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
<<<<<<< HEAD
    declare id_seccion: number | null;
    declare id_serie: number | null;
    declare id_subserie: number | null;
    declare clave: number | null;
    declare ubicacion: string | null;
    declare anio: number | null;
    declare tomo: string | null;
    declare num_exp: string | null;
    declare fecha_inicial: Date | null;
    declare fecha_final: Date | null;
    declare institucion: string | null ;
    declare nombre_exp: string | null ;
    declare fojas: number | null;
    declare observaciones: string | null;
    declare estado_doc: string | null;
    declare caracteristicas_externas_doc: string | null;
    declare estado: string | null;
    declare path_portada: string | null;
    declare path_doc: string | null;
=======
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
>>>>>>> 91e906b93cf90e60d617afcd19f441323b467a47
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
<<<<<<< HEAD
                allowNull: true
            },
            id_serie:{
                type: DataTypes.INTEGER,
                allowNull: true
            },
            id_subserie:{
                type: DataTypes.INTEGER,
                allowNull: true
            },
            clave:{
                type: DataTypes.INTEGER,
                allowNull: true
            },
            ubicacion:{
                type: DataTypes.STRING,
                allowNull: true
            },
            anio:{
                type: DataTypes.INTEGER,
                allowNull: true
            },
            tomo:{
                type: DataTypes.STRING,
                allowNull: true
            },
            num_exp:{
                type: DataTypes.STRING,
                allowNull: true
            },
            fecha_inicial:{
                type: DataTypes.DATE,
                allowNull: true
            },
            fecha_final:{
                type: DataTypes.DATE,
                allowNull: true
            },
            institucion:{
                type: DataTypes.STRING,
                allowNull: true
            },
            nombre_exp:{
                type: DataTypes.STRING,
                allowNull: true
            },
            fojas:{
                type: DataTypes.INTEGER,
                allowNull: true
            },
            observaciones:{
                type: DataTypes.STRING,
                allowNull: true
            },
            estado_doc:{
                type: DataTypes.STRING,
                allowNull: true
            },
            caracteristicas_externas_doc:{
                type: DataTypes.STRING,
                allowNull: true
            },
            estado:{
                type: DataTypes.STRING,
                allowNull: true
            },
            path_portada:{
                type: DataTypes.STRING,
                allowNull: true
            },
            path_doc:{
                type: DataTypes.STRING,
                allowNull: true
            },
            tipo_acceso:{
                type: DataTypes.INTEGER,
                allowNull: true
=======
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
>>>>>>> 91e906b93cf90e60d617afcd19f441323b467a47
            },
            status:{
                type: DataTypes.BOOLEAN,
                defaultValue: true
            }, 
            createdAt: {
                type: DataTypes.DATE,
<<<<<<< HEAD
                allowNull: true,
=======
                allowNull: false,
>>>>>>> 91e906b93cf90e60d617afcd19f441323b467a47
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