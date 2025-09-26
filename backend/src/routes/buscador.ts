import { Router } from "express";
import { addSolicitud, buscar } from "../controllers/buscador";

const router = Router();

router.get("/api/buscador/:id", buscar)
router.post("/api/buscador/solicitud/addSolicitud", addSolicitud)



export default router