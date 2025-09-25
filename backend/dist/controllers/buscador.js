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
exports.buscar = void 0;
const registros_1 = __importDefault(require("../models/registros"));
const secciones_1 = __importDefault(require("../models/secciones"));
const series_1 = __importDefault(require("../models/series"));
const subseries_1 = __importDefault(require("../models/subseries"));
const tipo_accesos_1 = __importDefault(require("../models/tipo_accesos"));
const buscar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { Op } = require('sequelize');
        const { id } = req.params;
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
            ],
            where: {
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
    }
    catch (error) {
        console.error('Error al generar consulta:', error);
        return res.status(500).json({ msg: 'Error interno del servidor' });
    }
});
exports.buscar = buscar;
