import { Router } from "express";
import { buscar } from "../controllers/buscador";

const router = Router();

router.get("/api/buscador/:id", buscar)



export default router