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
exports.editRegistro = exports.updateRegistro = exports.addRegistro = exports.comboAccesos = exports.comboSubseries = exports.comboSeries = exports.comboSecciones = exports.getRegistros = void 0;
const registros_1 = __importDefault(require("../models/registros"));
const secciones_1 = __importDefault(require("../models/secciones"));
const series_1 = __importDefault(require("../models/series"));
const subseries_1 = __importDefault(require("../models/subseries"));
const tipo_accesos_1 = __importDefault(require("../models/tipo_accesos"));
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
