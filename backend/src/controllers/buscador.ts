import { Request, Response } from "express"
import Registros from "../models/registros";
import Secciones from "../models/secciones";
import Series from "../models/series";
import Subseries from "../models/subseries";
import TipoAcceso from "../models/tipo_accesos";


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