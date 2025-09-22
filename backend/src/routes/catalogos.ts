import { Router } from "express";
import { actDescSeccion, actDescSerie, addSeccion, addSerie, editSeccion, editSerie, getSecciones, getSeries, updateSeccion, updateSerie } from "../controllers/catalogos";


const router = Router();

router.get("/api/catalogos/getSecciones", getSecciones)
router.post("/api/catalogos/addSeccion", addSeccion)
router.get("/api/catalogos/editSeccion/:id", editSeccion)
router.post("/api/catalogos/updateSeccion", updateSeccion)
router.get("/api/catalogos/actDescSeccion/:id", actDescSeccion)


router.get("/api/catalogos/getSeries", getSeries)
router.post("/api/catalogos/addSerie", addSerie)
router.get("/api/catalogos/editSerie/:id", editSerie)
router.post("/api/catalogos/updateSerie", updateSerie)
router.get("/api/catalogos/actDescSerie/:id", actDescSerie)


export default router