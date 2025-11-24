"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addCsv = exports.editRegistro = exports.updateRegistro = exports.addRegistro = exports.comboAccesos = exports.comboSubseries = exports.comboSeries = exports.comboSecciones = exports.getRegistros = void 0;
const registros_1 = __importDefault(require("../models/registros"));
const secciones_1 = __importDefault(require("../models/secciones"));
const series_1 = __importDefault(require("../models/series"));
const subseries_1 = __importDefault(require("../models/subseries"));
const tipo_accesos_1 = __importDefault(require("../models/tipo_accesos"));
const csv_parse_1 = require("csv-parse");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const getRegistros = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const registros = yield registros_1.default.findAll({
            include: [
                {
                    model: secciones_1.default,
                    as: 'm_seccion'
                },
                {
                    model: series_1.default,
                    as: 'm_serie'
                },
                {
                    model: subseries_1.default,
                    as: 'm_subserie'
                },
                {
                    model: tipo_accesos_1.default,
                    as: 'm_acceso'
                }
            ]
        });
        return res.json({
            data: registros
        });
    }
    catch (error) {
        console.error('Error al generar consulta:', error);
        return res.status(500).json({ msg: 'Error interno del servidor' });
    }
});
exports.getRegistros = getRegistros;
const comboSecciones = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const secciones = yield secciones_1.default.findAll({
            where: {
                status: true
            }
        });
        return res.json(secciones);
    }
    catch (error) {
        console.error('Error al generar consulta:', error);
        return res.status(500).json({ msg: 'Error interno del servidor' });
    }
});
exports.comboSecciones = comboSecciones;
const comboSeries = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const series = yield series_1.default.findAll({
            where: {
                status: true,
                idSeccion: id
            }
        });
        return res.json(series);
    }
    catch (error) {
        console.error('Error al generar consulta:', error);
        return res.status(500).json({ msg: 'Error interno del servidor' });
    }
});
exports.comboSeries = comboSeries;
const comboSubseries = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const subseries = yield subseries_1.default.findAll({
            where: {
                status: true,
                idSerie: id
            }
        });
        return res.json(subseries);
    }
    catch (error) {
        console.error('Error al generar consulta:', error);
        return res.status(500).json({ msg: 'Error interno del servidor' });
    }
});
exports.comboSubseries = comboSubseries;
const comboAccesos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const accesos = yield tipo_accesos_1.default.findAll();
        return res.json(accesos);
    }
    catch (error) {
        console.error('Error al generar consulta:', error);
        return res.status(500).json({ msg: 'Error interno del servidor' });
    }
});
exports.comboAccesos = comboAccesos;
const addRegistro = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        if (body.id == '') {
            body.id = null;
        }
        const idReg = yield registros_1.default.create(body);
        return res.json({
            status: 200
        });
    }
    catch (error) {
        console.error('Error al generar consulta:', error);
        return res.status(500).json({ msg: 'Error interno del servidor' });
    }
});
exports.addRegistro = addRegistro;
const updateRegistro = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const registro = yield registros_1.default.findByPk(body.id);
        yield (registro === null || registro === void 0 ? void 0 : registro.update(body));
        return res.json({
            status: 200
        });
    }
    catch (error) {
        console.error('Error al generar consulta:', error);
        return res.status(500).json({ msg: 'Error interno del servidor' });
    }
});
exports.updateRegistro = updateRegistro;
const editRegistro = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const registro = yield registros_1.default.findByPk(id);
        return res.json(registro);
    }
    catch (error) {
        console.error('Error al generar consulta:', error);
        return res.status(500).json({ msg: 'Error interno del servidor' });
    }
});
exports.editRegistro = editRegistro;
const addCsv = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.file) {
            return res.status(400).json({ msg: 'No se envió archivo' });
        }
        const csvContent = req.file.buffer.toString('utf-8');
        const records = [];
        (0, csv_parse_1.parse)(csvContent, {
            delimiter: ',',
            columns: false, // usa la primera fila como encabezados
            skip_empty_lines: true
        })
            .on('data', (row) => {
            records.push(row);
        })
            .on('end', () => __awaiter(void 0, void 0, void 0, function* () {
            var _a, _b, _c, _d;
            for (const element of records) {
                const fechaInicial = parseFecha(element[3]);
                const fechaFinal = parseFecha(element[4]);
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
                if (registro.tomo != '' && registro.tomo != null) {
                    registro.tomo = (_b = (_a = registro.tomo.match(/\d+/)) === null || _a === void 0 ? void 0 : _a[0]) !== null && _b !== void 0 ? _b : null;
                }
                if (registro.num_exp != '' && registro.num_exp != null) {
                    registro.num_exp = (_d = (_c = registro.num_exp.match(/\d+/)) === null || _c === void 0 ? void 0 : _c[0]) !== null && _d !== void 0 ? _d : null;
                }
                if (registro.tomo != null && registro.num_exp != null) {
                    const rutaArchivo = path_1.default.join(__dirname, `../../storage/tomos/Tomo ${registro.tomo}-${registro.anio}/PDFs`, `Exp ${registro.num_exp}.pdf`);
                    if (fs_1.default.existsSync(rutaArchivo)) {
                        registro.path_doc = 'storage/tomos/Tomo ' + registro.tomo + '-' + registro.anio + '/PDFs/Exp ' + registro.num_exp + '.pdf';
                        console.log(registro);
                    }
                }
                yield registros_1.default.create(registro);
            }
            res.json({ msg: 'CSV guardado correctamente' });
        }));
    }
    catch (error) {
        console.error('Error al cargar csv:', error);
        return res.status(500).json({ msg: 'Error interno del servidor' });
    }
});
exports.addCsv = addCsv;
function parseFecha(fecha) {
    if (!fecha || fecha.trim() === "")
        return null;
    const partes = fecha.trim().split('/');
    if (partes.length !== 3)
        return null;
    const [dia, mes, anio] = partes.map(p => parseInt(p));
    if (!dia || !mes || !anio)
        return null;
    return new Date(anio, mes - 1, dia);
}
