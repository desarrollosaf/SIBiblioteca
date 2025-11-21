
import { Request, Response } from "express"
import Registros from "../models/registros";
import Secciones from "../models/secciones";
import Series from "../models/series";
import Subseries from "../models/subseries";
import TipoAcceso from "../models/tipo_accesos";
import  DataTypes, { DATE }  from "sequelize";
import { parse } from "csv-parse";
import fs from 'fs';
import path, { format } from 'path';

export const getRegistros = async (req: Request, res: Response): Promise<any> => {
    try {
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
            ]
        });
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
        return res.json(accesos)

    } catch (error) {
        console.error('Error al generar consulta:', error);
        return res.status(500).json({ msg: 'Error interno del servidor'});
    }
}

export const addRegistro = async (req: Request, res: Response): Promise<any> => {
    try {
            const { body } = req
            if(body.id == ''){
                body.id =  null
            }
            const idReg = await Registros.create(body)
    
            return res.json({
                status: 200
            });

    } catch (error) {
        console.error('Error al generar consulta:', error);
        return res.status(500).json({ msg: 'Error interno del servidor'});
    }
}

export const updateRegistro = async (req: Request, res: Response): Promise<any> => {
    try {
        const { body } = req
        const registro = await Registros.findByPk(body.id);
        await registro?.update(body)

        return res.json({
            status: 200
        });

    } catch (error) {
        console.error('Error al generar consulta:', error);
        return res.status(500).json({ msg: 'Error interno del servidor'});
    }
}



export const editRegistro = async (req: Request, res: Response): Promise<any> => {
    try {
        const { id } = req.params;
        const registro = await Registros.findByPk(id);

        return res.json( registro );

    } catch (error) {
        console.error('Error al generar consulta:', error);
        return res.status(500).json({ msg: 'Error interno del servidor'});
    }
}

export const addCsv = async (req: Request, res: Response): Promise<any> => {
    try {
        if (!req.file) {
            return res.status(400).json({ msg: 'No se envió archivo' });
        }

        const csvContent = req.file.buffer.toString('utf-8');
        const records: any[] = [];
        parse(csvContent, {
            delimiter: ',',
            columns: false,  // usa la primera fila como encabezados
            skip_empty_lines: true
        })

        .on('data', (row) => {
            records.push(row);
        })

        .on('end', async () => {
            for (const element of records) {
        
                const fechaInicial = parseFecha(element[3]);
                const fechaFinal   = parseFecha(element[4]);
                const registro = {
                    anio: element[0] ? parseInt(element[0]) : null,
                    tomo: element[1] || null,
                    num_exp: element[2] || null,
                    fecha_inicial: fechaInicial,
                    fecha_final: fechaFinal,
                    institucion: element[5] || null,
                    nombre_exp: element[6] || null,
                    fojas: element[7] ? parseInt(element[7]) : null,
                    observaciones: element[8] || null,
                    estado_doc: element[9] || null,
                    caracteristicas_externas_doc: element[10] || null,
                    estado: element[11] || null,
                    path_portada: element[12] || null,
                    path_doc: element[13] || null, 
                    tipo_acceso: 2,
                    status: true
                };
                if(registro.tomo != '' && registro.tomo != null){
                    registro.tomo = registro.tomo.match(/\d+/)[0];
                }
                if(registro.num_exp != '' && registro.num_exp != null){
                    registro.num_exp = registro.num_exp.match(/\d+/)[0];
                }
                if (registro.tomo != null && registro.num_exp != null){
                    const rutaArchivo = path.join(__dirname, `../../storage/tomos/Tomo ${ registro.tomo}-${registro.anio}/PDFs` , `Exp ${registro.num_exp}.pdf`);
                    if (fs.existsSync(rutaArchivo)) {
                        registro.path_doc = rutaArchivo;
                    } 
                }
                await  Registros.create(registro);
            }
            res.json({ msg: 'CSV guardado correctamente' });
        });
    } catch (error) {
        console.error('Error al cargar csv:', error);
        return res.status(500).json({ msg: 'Error interno del servidor'});
    }
}

function parseFecha(fecha: string | null): Date | null {
    if (!fecha || fecha.trim() === "") return null;

    const partes = fecha.trim().split('/');
    if (partes.length !== 3) return null;

    const [dia, mes, anio] = partes.map(p => parseInt(p));
    if (!dia || !mes || !anio) return null;

    return new Date(anio, mes - 1, dia);
}
