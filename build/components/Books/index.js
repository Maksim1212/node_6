"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const service_1 = require("./service");
class Books {
    static async chart(req, res, next) {
        try {
            return res.status(200).json({
                data: await service_1.booksService.getChartData(),
            });
        }
        catch (error) {
            res.status(500).json({
                message: error.name,
                details: error.message,
            });
            return next(error);
        }
    }
}
exports.default = Books;
