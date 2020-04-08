"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router_1 = require("../config/router");
const app = express();
router_1.default.init(app);
router_1.default.init(app);
app.set('port', process.env.PORT || 3000);
exports.default = app;
