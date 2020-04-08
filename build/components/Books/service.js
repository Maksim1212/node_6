"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("./model");
class BoksService {
    async booksCount() {
        const cursor = model_1.default.aggregate([{
                $group: {
                    _id: { code3: '$code3' },
                    sumValue: { $sum: 1 },
                },
            }]).cursor({ batchSize: 100 }).exec();
        return cursor;
    }
    async getChartData() {
        const data = [];
        const cursor = await this.booksCount();
        await cursor.eachAsync((chart) => data.push({
            code3: chart._id.code3,
            value: chart.sumValue,
        }));
        return data;
    }
}
exports.booksService = new BoksService();
