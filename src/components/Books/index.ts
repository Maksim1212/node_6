import * as express from 'express';
import { booksService as BooksService  } from './service';

export default class Books {
    static async chart(req: express.Request, res: express.Response,next: express.NextFunction): Promise<any> {
        try {
            return res.status(200).json({
                data: await BooksService.getChartData(),
            });
        } catch (error) {
            res.status(500).json({
                message: error.name,
                details: error.message,
            });
        
            return next(error);
        }
    }
}
