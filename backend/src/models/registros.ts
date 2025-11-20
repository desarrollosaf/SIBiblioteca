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
            },
            status:{
                type: DataTypes.BOOLEAN,
                defaultValue: true
            }, 
            createdAt: {
                type: DataTypes.DATE,
                allowNull: true,
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