import { Router } from "express";
import { actDescSeccion, actDescSerie, actDescSubserie, addSeccion, addSerie, addSubserie, editSeccion, editSerie, editSubserie, getComnboSecciones, getComnboSeries, getSecciones, getSeries, getSubseries, updateSeccion, updateSerie, updateSubserie } from "../controllers/catalogos";


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
router.get("/api/catalogos/getComnboSecciones", getComnboSecciones)


router.get("/api/catalogos/getSubseries", getSubseries)
router.post("/api/catalogos/addSubserie", addSubserie)
router.get("/api/catalogos/editSubserie/:id", editSubserie)
router.post("/api/catalogos/updateSubserie", updateSubserie)
router.get("/api/catalogos/actDescSubserie/:id", actDescSubserie)
router.get("/api/catalogos/getComnboSeries", getComnboSeries)



export default router