import { Request, Response } from "express"
import Secciones from "../models/secciones"
import Series from "../models/series";
import Subseries from "../models/subseries";

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
        const {seccion} = req.body
        Secciones.create({
            seccion: seccion,
            status: true
        })

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
        const series = await Series.findAll({
            include:[
                {
                    model: Secciones,
                    as: 'm_seccion'
                }
            ]
        });

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
            const {idSeccion, serie} = req.body
            Series.create({
                idSeccion: idSeccion,
                serie: serie,
                status: true
            })
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

export const getComnboSecciones = async (req: Request, res: Response): Promise<any> => {
    try {
        const secciones = await Secciones.findAll({
            where: { status: true }
        })

        return res.json(secciones)

    } catch (error) {
        console.error('Error al traer datos:', error);
        return res.status(500).json({ msg: 'Error interno del servidor'});
    }
}



//subseries 

export const getSubseries = async (req: Request, res: Response): Promise<any> => {
    try {
        const subseries = await Subseries.findAll({
            include:[
                {
                    model: Series,
                    as: 'm_serie',
                    include:[
                        {
                            model: Secciones,
                            as: 'm_seccion',
                            
                        }
                    ],
                }
            ]
        });

        return res.json({
            data: subseries
        });
    } catch (error) {
        console.error('Error al generar consulta:', error);
        return res.status(500).json({ msg: 'Error interno del servidor'});
    }
}

export const addSubserie = async (req: Request, res: Response): Promise<any> => {
    try {
            const {idSerie, subserie} = req.body
            Subseries.create({
                idSerie: idSerie,
                subserie: subserie,
                status: true
            })
            return res.json({
                status: 200
            });
    } catch (error) {
        console.error('Error al guardar seccion:', error);
        return res.status(500).json({ msg: 'Error interno del servidor'});
    }
}

export const editSubserie = async (req: Request, res: Response): Promise<any> => {
    try {
        const { id } = req.params;
        const subserie = await Subseries.findByPk(id);

        return res.json( subserie );
    } catch (error) {
        console.error('Error al traer datos:', error);
        return res.status(500).json({ msg: 'Error interno del servidor'});
    }
}

export const updateSubserie = async (req: Request, res: Response): Promise<any> => {
    try {
        const { body } = req
        const subserie = await Subseries.findByPk(body.id);
        await subserie?.update(body)

        return res.json( subserie );


    } catch (error) {
        console.error('Error al editar datos:', error);
        return res.status(500).json({ msg: 'Error interno del servidor'});
    }
}

export const actDescSubserie = async (req: Request, res: Response): Promise<any> => {
    try {
        const { id } = req.params;
        const subserie = await Subseries.findByPk(id);

        if(subserie?.status == true){
            await subserie.update(
                { status: false },                    // Valores que quieres actualizar
                { where: { id: id} }
            );
            return res.json(1)
        }else if(subserie?.status == false){
             await subserie.update(
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

export const getComnboSeries = async (req: Request, res: Response): Promise<any> => {
    try {
        const series = await Series.findAll({
            where: { status: true }
        })

        return res.json(series)

    } catch (error) {
        console.error('Error al traer datos:', error);
        return res.status(500).json({ msg: 'Error interno del servidor'});
    }
}