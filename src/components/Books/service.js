const booksModel = require('./model');
/**
 * @method getChartData
 * @param {any}
 * @returns {any}
 */
async function booksCount() {
    const cursor = booksModel.aggregate([{
        $group: {
            _id: { code3: '$code3' },
            sumValue: { $sum: 1 },
        },
    }]).cursor({ batchSize: 100 }).exec();

    return cursor;
}

// booksCount().then((res) => console.log(res));
async function getChartData() {
    const data = [];
    const cursor = await booksCount();
    await cursor.eachAsync((chart) => data.push({
        code3: chart['_id'].code3,
        value: chart.sumValue,
    }));
    return data;
}
module.exports = {
    getChartData,
};
