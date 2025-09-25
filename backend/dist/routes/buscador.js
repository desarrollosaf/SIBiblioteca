"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const buscador_1 = require("../controllers/buscador");
const router = (0, express_1.Router)();
router.get("/api/buscador/:id", buscador_1.buscar);
exports.default = router;
