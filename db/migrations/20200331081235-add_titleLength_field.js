let i = 0;
let booksTitleLength = [];
let id = [];

module.exports = {

    async up(db, client) {
        const books = await db.collection('booksmodel').find({}).toArray();

        for (i; i < books.length; i++) {
            booksTitleLength = books[i].title.length;
            id = books[i]['_id'];
            db.collection('booksmodel').updateOne({ _id: id }, { $set: { titleLength: booksTitleLength } });
        }
    },

    async down(db, client) {
        const books = await db.collection('booksmodel').find({}).toArray();

        for (i; i < books.length; i++) {
            booksTitleLength = books[i].title.length;
            id = books[i]['_id'];
            db.collection('booksmodel').updateOne({ _id: id }, { $unset: { titleLength: booksTitleLength } });
        }
    },
};
