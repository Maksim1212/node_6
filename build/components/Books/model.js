"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const connection_1 = require("../../config/connection");
const BooksSchema = new mongoose_1.Schema({
    title: {
        type: String,
        trim: true,
    },
    titleLength: {
        type: Number,
        required: false,
    },
    description: {
        type: String,
        required: true,
    },
    code3: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        required: true,
    },
    updatedAt: {
        type: Date,
        required: true,
    },
}, {
    collection: 'booksmodel',
    versionKey: false,
});
exports.default = connection_1.default.model('BooksModel', BooksSchema);
