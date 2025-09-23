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
exports.getComnboSeries = exports.actDescSubserie = exports.updateSubserie = exports.editSubserie = exports.addSubserie = exports.getSubseries = exports.getComnboSecciones = exports.actDescSerie = exports.updateSerie = exports.editSerie = exports.addSerie = exports.getSeries = exports.actDescSeccion = exports.updateSeccion = exports.editSeccion = exports.addSeccion = exports.getSecciones = void 0;
const secciones_1 = __importDefault(require("../models/secciones"));
const series_1 = __importDefault(require("../models/series"));
const subseries_1 = __importDefault(require("../models/subseries"));
const getSecciones = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const secciones = yield secciones_1.default.findAll();
        return res.json({
            data: secciones
        });
    }
    catch (error) {
        console.error('Error al generar consulta:', error);
        return res.status(500).json({ msg: 'Error interno del servidor' });
    }
});
exports.getSecciones = getSecciones;
const addSeccion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const idSeccion = yield secciones_1.default.create(body);
        return res.json({
            status: 200
        });
    }
    catch (error) {
        console.error('Error al guardar seccion:', error);
        return res.status(500).json({ msg: 'Error interno del servidor' });
    }
});
exports.addSeccion = addSeccion;
const editSeccion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        console.log('ediiiit' + id);
        const seccion = yield secciones_1.default.findByPk(id);
        return res.json(seccion);
    }
    catch (error) {
        console.error('Error al traer datos:', error);
        return res.status(500).json({ msg: 'Error interno del servidor' });
    }
});
exports.editSeccion = editSeccion;
const updateSeccion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        console.log(body);
        const seccion = yield secciones_1.default.findByPk(body.id);
        yield (seccion === null || seccion === void 0 ? void 0 : seccion.update(body));
        return res.json(seccion);
    }
    catch (error) {
        console.error('Error al editar datos:', error);
        return res.status(500).json({ msg: 'Error interno del servidor' });
    }
});
exports.updateSeccion = updateSeccion;
const actDescSeccion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const seccion = yield secciones_1.default.findByPk(id);
        if ((seccion === null || seccion === void 0 ? void 0 : seccion.status) == true) {
            yield seccion.update({ status: false }, // Valores que quieres actualizar
            { where: { id: id } });
            return res.json(1);
        }
        else if ((seccion === null || seccion === void 0 ? void 0 : seccion.status) == false) {
            yield seccion.update({ status: true }, // Valores que quieres actualizar
            { where: { id: id } });
            return res.json(2);
        }
    }
    catch (error) {
        console.error('Error al traer datos:', error);
        return res.status(500).json({ msg: 'Error interno del servidor' });
    }
});
exports.actDescSeccion = actDescSeccion;
//series 
const getSeries = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const series = yield series_1.default.findAll({
            include: [
                {
                    model: secciones_1.default,
                    as: 'm_seccion'
                }
            ]
        });
        return res.json({
            data: series
        });
    }
    catch (error) {
        console.error('Error al generar consulta:', error);
        return res.status(500).json({ msg: 'Error interno del servidor' });
    }
});
exports.getSeries = getSeries;
const addSerie = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { idSeccion, serie } = req.body;
        series_1.default.create({
            idSeccion: idSeccion,
            serie: serie,
            status: true
        });
        return res.json({
            status: 200
        });
    }
    catch (error) {
        console.error('Error al guardar seccion:', error);
        return res.status(500).json({ msg: 'Error interno del servidor' });
    }
});
exports.addSerie = addSerie;
const editSerie = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const serie = yield series_1.default.findByPk(id);
        return res.json(serie);
    }
    catch (error) {
        console.error('Error al traer datos:', error);
        return res.status(500).json({ msg: 'Error interno del servidor' });
    }
});
exports.editSerie = editSerie;
const updateSerie = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const serie = yield series_1.default.findByPk(body.id);
        yield (serie === null || serie === void 0 ? void 0 : serie.update(body));
        return res.json(serie);
    }
    catch (error) {
        console.error('Error al editar datos:', error);
        return res.status(500).json({ msg: 'Error interno del servidor' });
    }
});
exports.updateSerie = updateSerie;
const actDescSerie = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const serie = yield series_1.default.findByPk(id);
        if ((serie === null || serie === void 0 ? void 0 : serie.status) == true) {
            yield serie.update({ status: false }, // Valores que quieres actualizar
            { where: { id: id } });
            return res.json(1);
        }
        else if ((serie === null || serie === void 0 ? void 0 : serie.status) == false) {
            yield serie.update({ status: true }, // Valores que quieres actualizar
            { where: { id: id } });
            return res.json(2);
        }
    }
    catch (error) {
        console.error('Error al traer datos:', error);
        return res.status(500).json({ msg: 'Error interno del servidor' });
    }
});
exports.actDescSerie = actDescSerie;
const getComnboSecciones = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const secciones = yield secciones_1.default.findAll({
            where: { status: true }
        });
        return res.json(secciones);
    }
    catch (error) {
        console.error('Error al traer datos:', error);
        return res.status(500).json({ msg: 'Error interno del servidor' });
    }
});
exports.getComnboSecciones = getComnboSecciones;
//subseries 
const getSubseries = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const subseries = yield subseries_1.default.findAll({
            include: [
                {
                    model: series_1.default,
                    as: 'm_serie',
                    include: [
                        {
                            model: secciones_1.default,
                            as: 'm_seccion',
                        }
                    ],
                }
            ]
        });
        return res.json({
            data: subseries
        });
    }
    catch (error) {
        console.error('Error al generar consulta:', error);
        return res.status(500).json({ msg: 'Error interno del servidor' });
    }
});
exports.getSubseries = getSubseries;
const addSubserie = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { idSerie, subserie } = req.body;
        subseries_1.default.create({
            idSerie: idSerie,
            subserie: subserie,
            status: true
        });
        return res.json({
            status: 200
        });
    }
    catch (error) {
        console.error('Error al guardar seccion:', error);
        return res.status(500).json({ msg: 'Error interno del servidor' });
    }
});
exports.addSubserie = addSubserie;
const editSubserie = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const subserie = yield subseries_1.default.findByPk(id);
        return res.json(subserie);
    }
    catch (error) {
        console.error('Error al traer datos:', error);
        return res.status(500).json({ msg: 'Error interno del servidor' });
    }
});
exports.editSubserie = editSubserie;
const updateSubserie = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const subserie = yield subseries_1.default.findByPk(body.id);
        yield (subserie === null || subserie === void 0 ? void 0 : subserie.update(body));
        return res.json(subserie);
    }
    catch (error) {
        console.error('Error al editar datos:', error);
        return res.status(500).json({ msg: 'Error interno del servidor' });
    }
});
exports.updateSubserie = updateSubserie;
const actDescSubserie = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const subserie = yield subseries_1.default.findByPk(id);
        if ((subserie === null || subserie === void 0 ? void 0 : subserie.status) == true) {
            yield subserie.update({ status: false }, // Valores que quieres actualizar
            { where: { id: id } });
            return res.json(1);
        }
        else if ((subserie === null || subserie === void 0 ? void 0 : subserie.status) == false) {
            yield subserie.update({ status: true }, // Valores que quieres actualizar
            { where: { id: id } });
            return res.json(2);
        }
    }
    catch (error) {
        console.error('Error al traer datos:', error);
        return res.status(500).json({ msg: 'Error interno del servidor' });
    }
});
exports.actDescSubserie = actDescSubserie;
const getComnboSeries = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const series = yield series_1.default.findAll({
            where: { status: true }
        });
        return res.json(series);
    }
    catch (error) {
        console.error('Error al traer datos:', error);
        return res.status(500).json({ msg: 'Error interno del servidor' });
    }
});
exports.getComnboSeries = getComnboSeries;
