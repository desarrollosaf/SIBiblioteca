export interface Registro {
    id: number;
    id_seccion: number;
    id_serie: number;
    id_subserie: number;
    clave: string;
    ubicacion: string;
    anio: number;
    tomo: string;
    num_exp: string;
    fecha_inicial: Date;
    fecha_final: Date;
    institucion: string;
    nombre_exp: string;
    fojas: number;
    observaciones: string;
    estado_doc: string;
    caracteristicas_externas_doc: string;
    path_portada: string;
    path_doc: string;
    tipo_acceso: string;
}
