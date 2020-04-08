import booksModel from './model';

export interface IBookChart {
    [x: string]: any;
    code3: string;
    value: number;
}
/**
 * @method booksCount
 * @param {any}
 * @returns {any}
 */

class BoksService {
    
    public async booksCount(): Promise<IBookChart> {
        const cursor = booksModel.aggregate([{
            $group: {
                _id: { code3: '$code3' },
                sumValue: { $sum: 1 },
            },
        }]).cursor({ batchSize: 100 }).exec();
    
        return cursor;
    }

    public async getChartData(): Promise<IBookChart[]> {
        
        const data = [];
        const cursor = await this.booksCount();

        await cursor.eachAsync((chart) => data.push({
            code3: chart._id.code3,
            value: chart.sumValue,
        }));

        return data;
    }
}

export const booksService: BoksService =  new BoksService();
