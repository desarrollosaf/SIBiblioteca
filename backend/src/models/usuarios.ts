import{
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  ForeignKey,
} from 'sequelize';

import sequelize from '../database/connectionBiblioteca';


class Usuarios extends Model<
  InferAttributes<Usuarios>,
  InferCreationAttributes<Usuarios>
> {
    declare id: CreationOptional<number>;
    declare nombre_completo: string; 
    declare telefono: number; 
    declare correo: string;
    declare psw: string;
    declare createdAt?: Date;
    declare updatedAt?: Date;
}

Usuarios.init(
    {
        id:{
           autoIncrement: true,
            type: DataTypes.NUMBER,
            allowNull: false,
            primaryKey: true
        },
        nombre_completo:{
            type: DataTypes.STRING,
            allowNull: false
        },
        telefono:{
            type: DataTypes.NUMBER,
            allowNull: false
        },
        correo:{
            type: DataTypes.STRING,
            defaultValue: true
        },
        psw:{
            type: DataTypes.STRING,
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
        tableName: 'usuarios',
        timestamps: true,
    }
);

export default Usuarios;