import { Router } from "express";
import { addRegistro, comboAccesos, comboSecciones, comboSeries, comboSubseries, editRegistro, getRegistros, updateRegistro } from "../controllers/registros";

const router = Router();

router.get("/api/registros/getRegistros", getRegistros)

router.get("/api/registros/comboSecciones", comboSecciones)
router.get("/api/registros/comboSeries/:id", comboSeries)
router.get("/api/registros/comboSubseries/:id", comboSubseries)
router.get("/api/registros/comboAccesos", comboAccesos)
router.post("/api/registros/addRegistro", addRegistro)
router.post("/api/registros/updateRegistro", updateRegistro)
router.get("/api/registros/editRegistro/:id", editRegistro)



export default router