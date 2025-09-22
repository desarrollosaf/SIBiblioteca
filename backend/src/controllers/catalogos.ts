import { Request, Response } from "express"
import Secciones from "../models/secciones"
import Series from "../models/series";

export const getSecciones = async (req: Request, res: Response): Promise<any> => {
    try {
        const secciones = await Secciones.findAll();

        return res.json({
            data: secciones
        });
    } catch (error) {
        console.error('Error al generar consulta:', error);
        return res.status(500).json({ msg: 'Error interno del servidor'});
    }
}

export const addSeccion = async (req: Request, res: Response): Promise<any> => {
    try {
            const { body } = req
            const idSeccion = await Secciones.create(body);

            return res.json({
                status: 200
            });
    } catch (error) {
        console.error('Error al guardar seccion:', error);
        return res.status(500).json({ msg: 'Error interno del servidor'});
    }
}

export const editSeccion = async (req: Request, res: Response): Promise<any> => {
    try {
        const { id } = req.params;
        console.log('ediiiit'+id);
        const seccion = await Secciones.findByPk(id);

        return res.json( seccion );
    } catch (error) {
        console.error('Error al traer datos:', error);
        return res.status(500).json({ msg: 'Error interno del servidor'});
    }
}

export const updateSeccion = async (req: Request, res: Response): Promise<any> => {
    try {
        const { body } = req

        console.log(body)
        const seccion = await Secciones.findByPk(body.id);
        await seccion?.update(body)

        return res.json( seccion );


    } catch (error) {
        console.error('Error al editar datos:', error);
        return res.status(500).json({ msg: 'Error interno del servidor'});
    }
}

export const actDescSeccion = async (req: Request, res: Response): Promise<any> => {
    try {
        const { id } = req.params;
        const seccion = await Secciones.findByPk(id);

        if(seccion?.status == true){
            await seccion.update(
                { status: false },                    // Valores que quieres actualizar
                { where: { id: id} }
            );
            return res.json(1)
        }else if(seccion?.status == false){
            await seccion.update(
                { status: true },                    // Valores que quieres actualizar
                { where: { id: id} }
            );
            return res.json(2)
        }
    } catch (error) {
        console.error('Error al traer datos:', error);
        return res.status(500).json({ msg: 'Error interno del servidor'});
    }
}


//series 

export const getSeries = async (req: Request, res: Response): Promise<any> => {
    try {
        const series = await Series.findAll();

        return res.json({
            data: series
        });
    } catch (error) {
        console.error('Error al generar consulta:', error);
        return res.status(500).json({ msg: 'Error interno del servidor'});
    }
}

export const addSerie = async (req: Request, res: Response): Promise<any> => {
    try {
            const { body } = req
            const idSerie = await Series.create(body);

            return res.json({
                status: 200
            });
    } catch (error) {
        console.error('Error al guardar seccion:', error);
        return res.status(500).json({ msg: 'Error interno del servidor'});
    }
}

export const editSerie = async (req: Request, res: Response): Promise<any> => {
    try {
        const { id } = req.params;
        const serie = await Series.findByPk(id);

        return res.json( serie );
    } catch (error) {
        console.error('Error al traer datos:', error);
        return res.status(500).json({ msg: 'Error interno del servidor'});
    }
}

export const updateSerie = async (req: Request, res: Response): Promise<any> => {
    try {
        const { body } = req
        const serie = await Series.findByPk(body.id);
        await serie?.update(body)

        return res.json( serie );


    } catch (error) {
        console.error('Error al editar datos:', error);
        return res.status(500).json({ msg: 'Error interno del servidor'});
    }
}

export const actDescSerie = async (req: Request, res: Response): Promise<any> => {
    try {
        const { id } = req.params;
        const serie = await Series.findByPk(id);

        if(serie?.status == true){
            await serie.update(
                { status: false },                    // Valores que quieres actualizar
                { where: { id: id} }
            );
            return res.json(1)
        }else if(serie?.status == false){
             await serie.update(
                { status: true },                    // Valores que quieres actualizar
                { where: { id: id} }
            );
            return res.json(2)
        }
    } catch (error) {
        console.error('Error al traer datos:', error);
        return res.status(500).json({ msg: 'Error interno del servidor'});
    }
}


