"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const index_1 = require("./index");
const router = express.Router();
router.get('/', index_1.default.chart);
exports.default = router;
