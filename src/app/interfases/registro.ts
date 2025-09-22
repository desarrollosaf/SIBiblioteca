export interface Registro {
    id: string;
    seccion: string;
    serie: string;
    subserie: string;
    clave: string;
    ubicacion: string;
    anio: number;
    tomo: string;
    noExp: string;
    fecha_inicial: Date;
    fecha_final: Date;
    institucion: string;
    nombre_exp: string;
    fojas: number;
    observaciones: string;
    estado_doc: string;
    caracteristicas_doc: string;
    img_doc: string;
}
