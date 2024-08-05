"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const links_controller_1 = require("../controllers/links.controller");
const router = (0, express_1.Router)();
router.get('/', links_controller_1.getLinks);
exports.default = router;
