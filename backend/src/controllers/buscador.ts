import { Request, Response } from "express"
import Registros from "../models/registros";
import Secciones from "../models/secciones";
import Series from "../models/series";
import Subseries from "../models/subseries";
import TipoAcceso from "../models/tipo_accesos";
import User from "../models/user";
import Usuarios from "../models/usuarios";
import Solicitudes from "../models/solicitudes";


export const buscar = async (req: Request, res: Response): Promise<any> => {
    try {
        const { Op } = require('sequelize');
        const { id } = req.params;

        const registros = await Registros.findAll({
            include:[
                { 
                    model: Secciones,
                    as: 'm_seccion'
                },
                { 
                    model: Series,
                    as: 'm_serie'
                },
                { 
                    model: Subseries,
                    as: 'm_subserie'
                },
                { 
                    model: TipoAcceso,
                    as: 'm_acceso'
                }
            ], 
            where:{
                [Op.or]: [
                    { clave: { [Op.like]: `%${id}%` } },
                    { ubicacion: { [Op.like]: `%${id}%` } },
                    { anio: { [Op.like]: `%${id}%` } },
                    { tomo: { [Op.like]: `%${id}%` } },
                    { num_exp: { [Op.like]: `%${id}%` } },
                    { institucion: { [Op.like]: `%${id}%` } },
                    { nombre_exp: { [Op.like]: `%${id}%` } },
                    { observaciones: { [Op.like]: `%${id}%` } },
                    { estado_doc: { [Op.like]: `%${id}%` } },
                    { caracteristicas_externas_doc: { [Op.like]: `%${id}%` } },
                ],
                status: true
            }
        });
    
        return res.json(registros);
    } catch (error) {
        console.error('Error al generar consulta:', error);
        return res.status(500).json({ msg: 'Error interno del servidor'});
    }
}

export const addSolicitud = async (req: Request, res: Response): Promise<any> => {
    try {
            const {body} = req
            const bcrypt = require('bcrypt'); 
            const correo = await Usuarios.findOne({
                where:{
                    correo: body.correo
                }
            });
            if(!correo){
            //crea usuario 
                const saltRounds = 10; 
                const psww = body.correo;
                const hash = await bcrypt.hash(psww, saltRounds);
                const idUsuario = Usuarios.create({
                    nombre_completo: body.nombre_completo,
                    telefono: body.telefono,
                    correo: body.correo,
                    psw: hash
                })
               Solicitudes.create({
                    id_usuario: (await idUsuario).id,
                    id_registro: body.id_registro,
                });
            }else{

                const existeSolicitud = await Solicitudes.findOne({
                    where:{
                        id_usuario: correo.id,
                        id_registro: body.id_registro
                    }
                })

                if(!existeSolicitud){
                    const idUs = correo.id;
                    Solicitudes.create({
                        id_usuario: idUs,
                        id_registro: body.id_registro,
                    });
                    return res.json(200);
                }else{
                    return res.json(300);
                }
            }
    } catch (error) {
        console.error('Error al guardar seccion:', error);
        return res.status(500).json({ msg: 'Error interno del servidor'});
    }
}