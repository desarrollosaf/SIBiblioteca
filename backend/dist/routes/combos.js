"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const catalogos_1 = require("../controllers/catalogos");
const router = (0, express_1.Router)();
router.get("api/catalogos/getSecciones", catalogos_1.getSecciones);
exports.default = router;
