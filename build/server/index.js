"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const events_1 = require("./events");
const server_1 = require("./server");
const port = server_1.default.get('port');
events_1.default.bind(http.createServer(server_1.default).listen(port), port);
