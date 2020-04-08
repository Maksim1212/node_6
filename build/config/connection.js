"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const MONGODB_URI = 'mongodb://localhost:27017/';
const MONGODB_DB_MAIN = 'books_db';
const MONGO_URI = `${MONGODB_URI}${MONGODB_DB_MAIN}`;
const connectOptions = {
    autoReconnect: true,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 1000,
    useNewUrlParser: true,
    useUnifiedTopology: true,
};
exports.default = mongoose.createConnection(MONGO_URI, connectOptions);
