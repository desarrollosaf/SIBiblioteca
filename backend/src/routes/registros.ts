import { Router } from "express";
import { comboAccesos, comboSecciones, comboSeries, comboSubseries, getRegistros } from "../controllers/registros";

const router = Router();

router.get("/api/registros/getRegistros", getRegistros)

router.get("/api/registros/comboSecciones", comboSecciones)
router.get("/api/registros/comboSeries/:id", comboSeries)
router.get("/api/registros/comboSubseries/:id", comboSubseries)
router.get("/api/registros/comboAccesos", comboAccesos)


export default router