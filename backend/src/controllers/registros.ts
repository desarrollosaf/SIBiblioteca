
import { Request, Response } from "express"
import Registros from "../models/registros";
import Secciones from "../models/secciones";
import Series from "../models/series";
import Subseries from "../models/subseries";
import TipoAcceso from "../models/tipo_accesos";

export const getRegistros = async (req: Request, res: Response): Promise<any> => {
    try {
        const registros = await Registros.findAll();

        return res.json({
            data: registros
        });
    } catch (error) {
        console.error('Error al generar consulta:', error);
        return res.status(500).json({ msg: 'Error interno del servidor'});
    }
}

export const comboSecciones = async (req: Request, res: Response): Promise<any> => {
    try {
        const secciones = await Secciones.findAll({
            where: {
                status: true
            }
        });

        return res.json(secciones)

    } catch (error) {
        console.error('Error al generar consulta:', error);
        return res.status(500).json({ msg: 'Error interno del servidor'});
    }
}

export const comboSeries = async (req: Request, res: Response): Promise<any> => {
    try {
        const { id } = req.params;
        const series = await Series.findAll({
            where: {
                status: true,
                idSeccion: id
            }
        });

        return res.json(series)

    } catch (error) {
        console.error('Error al generar consulta:', error);
        return res.status(500).json({ msg: 'Error interno del servidor'});
    }
}

export const comboSubseries = async (req: Request, res: Response): Promise<any> => {
    try {
        const { id } = req.params;
        const subseries = await Subseries.findAll({
            where: {
                status: true,
                idSerie: id
            }
        });

        return res.json(subseries)

    } catch (error) {
        console.error('Error al generar consulta:', error);
        return res.status(500).json({ msg: 'Error interno del servidor'});
    }
}

export const comboAccesos = async (req: Request, res: Response): Promise<any> => {
    try {
        const { id } = req.params;
        const accesos = await TipoAcceso.findAll();
console.log('auuuuuuuuuuuuuuuu')
        return res.json(accesos)

    } catch (error) {
        console.error('Error al generar consulta:', error);
        return res.status(500).json({ msg: 'Error interno del servidor'});
    }
}



