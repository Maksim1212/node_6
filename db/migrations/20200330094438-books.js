const path = require('path');
const csv = require('csvtojson');

const csvFilePath = (path.join(__dirname, '../../books.csv'));

/**
 * @method getDataFromBooksCsv
 * @param {any}
 * @returns {any}
 */

function getDataFromBooksCsv() {
    return csv()
        .fromFile(csvFilePath);
}

module.exports = {
    async up(db, client) {
        const books = await getDataFromBooksCsv();
        books.forEach((book) => {
            db.collection('booksmodel').insertOne({
                _id: book.id,
                code3: book.code3,
                title: book.title,
                description: book.description,
                createdAt: new Date(),
                updatedAt: new Date(),
            });
        });
    },

    async down(db, client) {
        db.collection('booksmodel').drop();
    },
};
